import fs from "fs/promises";
import path from "path";
import { seedProducts } from "@/data/seed-products";
import { slugify } from "@/lib/slugify";
import { Product, ProductCategory } from "@/lib/types";

const LOCAL_FILE = path.join(process.cwd(), "data/products.json");
const BLOB_STORE = "mrcomputer-products";
const BLOB_KEY = "catalog";

function isNetlifyRuntime(): boolean {
  return Boolean(process.env.NETLIFY || process.env.NETLIFY_LOCAL);
}

async function readLocalFile(): Promise<Product[] | null> {
  try {
    const raw = await fs.readFile(LOCAL_FILE, "utf-8");
    return JSON.parse(raw) as Product[];
  } catch {
    return null;
  }
}

async function writeLocalFile(products: Product[]): Promise<void> {
  await fs.mkdir(path.dirname(LOCAL_FILE), { recursive: true });
  await fs.writeFile(LOCAL_FILE, `${JSON.stringify(products, null, 2)}\n`, "utf-8");
}

async function readBlobStore(): Promise<Product[] | null> {
  if (!isNetlifyRuntime()) {
    return null;
  }

  try {
    const { getStore } = await import("@netlify/blobs");
    const store = getStore({ name: BLOB_STORE, consistency: "strong" });
    const data = await store.get(BLOB_KEY, { type: "json" });
    return (data as Product[] | null) ?? null;
  } catch {
    return null;
  }
}

async function writeBlobStore(products: Product[]): Promise<void> {
  const { getStore } = await import("@netlify/blobs");
  const store = getStore({ name: BLOB_STORE, consistency: "strong" });
  await store.setJSON(BLOB_KEY, products);
}

async function persistProducts(products: Product[]): Promise<void> {
  if (isNetlifyRuntime()) {
    await writeBlobStore(products);
    return;
  }

  await writeLocalFile(products);
}

export async function getAllProducts(): Promise<Product[]> {
  if (isNetlifyRuntime()) {
    const blobProducts = await readBlobStore();
    if (blobProducts?.length) {
      return blobProducts;
    }

    // Netlify exposes `NETLIFY` during builds, but Blobs credentials are only
    // injected into Functions, Edge Functions, and Build Plugins. Static page
    // generation must therefore be able to fall back to the bundled catalog.
    try {
      await writeBlobStore(seedProducts);
    } catch {
      return seedProducts;
    }

    return seedProducts;
  }

  const localProducts = await readLocalFile();
  if (localProducts?.length) {
    return localProducts;
  }

  await writeLocalFile(seedProducts);
  return seedProducts;
}

export async function getProductById(id: string): Promise<Product | null> {
  const products = await getAllProducts();
  return products.find((product) => product.id === id) ?? null;
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  const products = await getAllProducts();
  return products.find((product) => product.slug === slug) ?? null;
}

export async function getFeaturedProducts(): Promise<Product[]> {
  const products = await getAllProducts();
  return products.filter((product) => product.featured);
}

function nextProductId(products: Product[]): string {
  const maxId = products.reduce((max, product) => {
    const numericId = Number(product.id);
    return Number.isFinite(numericId) ? Math.max(max, numericId) : max;
  }, 0);

  return String(maxId + 1);
}

function ensureUniqueSlug(baseSlug: string, products: Product[], excludeId?: string): string {
  let slug = baseSlug || "produkt";
  let suffix = 1;

  while (products.some((product) => product.slug === slug && product.id !== excludeId)) {
    suffix += 1;
    slug = `${baseSlug}-${suffix}`;
  }

  return slug;
}

export type ProductInput = {
  name: string;
  slug?: string;
  shortDescription: string;
  description: string;
  price: number;
  salePrice?: number | null;
  category: ProductCategory;
  badge?: string | null;
  featured?: boolean;
  specs: string[];
  included: string[];
  supportMonths: number;
  image: string;
};

function normalizeProductInput(input: ProductInput): Omit<Product, "id"> {
  const slug = slugify(input.slug?.trim() || input.name);

  return {
    slug,
    name: input.name.trim(),
    shortDescription: input.shortDescription.trim(),
    description: input.description.trim(),
    price: input.price,
    salePrice: input.salePrice ?? undefined,
    category: input.category,
    badge: input.badge?.trim() || undefined,
    featured: Boolean(input.featured),
    specs: input.specs.map((item) => item.trim()).filter(Boolean),
    included: input.included.map((item) => item.trim()).filter(Boolean),
    supportMonths: input.supportMonths,
    image: input.image.trim(),
  };
}

export async function createProduct(input: ProductInput): Promise<Product> {
  const products = await getAllProducts();
  const normalized = normalizeProductInput(input);
  const product: Product = {
    id: nextProductId(products),
    ...normalized,
    slug: ensureUniqueSlug(normalized.slug, products),
  };

  const updated = [...products, product];
  await persistProducts(updated);
  return product;
}

export async function updateProduct(id: string, input: ProductInput): Promise<Product> {
  const products = await getAllProducts();
  const index = products.findIndex((product) => product.id === id);

  if (index === -1) {
    throw new Error("Produktet findes ikke");
  }

  const normalized = normalizeProductInput(input);
  const updatedProduct: Product = {
    ...products[index],
    ...normalized,
    slug: ensureUniqueSlug(normalized.slug, products, id),
  };

  const updated = [...products];
  updated[index] = updatedProduct;
  await persistProducts(updated);
  return updatedProduct;
}

export async function deleteProduct(id: string): Promise<void> {
  const products = await getAllProducts();
  const updated = products.filter((product) => product.id !== id);

  if (updated.length === products.length) {
    throw new Error("Produktet findes ikke");
  }

  await persistProducts(updated);
}
