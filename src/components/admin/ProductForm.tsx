"use client";

import Image from "next/image";
import { FormEvent, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Product, ProductCategory } from "@/lib/types";

const categories: { value: ProductCategory; label: string }[] = [
  { value: "pakker", label: "Pakker" },
  { value: "ydelser", label: "Ydelser" },
  { value: "tilbehor", label: "Tilbehør" },
];

type ProductFormValues = {
  name: string;
  slug: string;
  shortDescription: string;
  description: string;
  price: string;
  salePrice: string;
  category: ProductCategory;
  badge: string;
  featured: boolean;
  specs: string;
  included: string;
  supportMonths: string;
  image: string;
};

function toFormValues(product?: Product): ProductFormValues {
  return {
    name: product?.name ?? "",
    slug: product?.slug ?? "",
    shortDescription: product?.shortDescription ?? "",
    description: product?.description ?? "",
    price: product ? String(product.price) : "",
    salePrice: product?.salePrice ? String(product.salePrice) : "",
    category: product?.category ?? "pakker",
    badge: product?.badge ?? "",
    featured: product?.featured ?? false,
    specs: product?.specs.join("\n") ?? "",
    included: product?.included.join("\n") ?? "",
    supportMonths: product ? String(product.supportMonths) : "12",
    image: product?.image ?? "/products/",
  };
}

interface ProductFormProps {
  product?: Product;
  mode: "create" | "edit";
}

export function ProductForm({ product, mode }: ProductFormProps) {
  const router = useRouter();
  const [values, setValues] = useState<ProductFormValues>(() => toFormValues(product));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const payload = useMemo(
    () => ({
      name: values.name,
      slug: values.slug,
      shortDescription: values.shortDescription,
      description: values.description,
      price: Number(values.price),
      salePrice: values.salePrice ? Number(values.salePrice) : null,
      category: values.category,
      badge: values.badge || null,
      featured: values.featured,
      specs: values.specs.split("\n"),
      included: values.included.split("\n"),
      supportMonths: Number(values.supportMonths),
      image: values.image,
    }),
    [values]
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError(null);

    const url =
      mode === "create" ? "/api/admin/products" : `/api/admin/products/${product?.id}`;
    const method = mode === "create" ? "POST" : "PUT";

    try {
      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await response.json()) as { error?: string; product?: Product };

      if (!response.ok) {
        throw new Error(data.error ?? "Kunne ikke gemme produktet");
      }

      router.push("/admin/products");
      router.refresh();
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "Kunne ikke gemme produktet");
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="space-y-6 rounded-2xl border border-gray-200 bg-white p-6">
        <div>
          <label className="text-sm font-medium text-navy" htmlFor="name">
            Navn
          </label>
          <input
            id="name"
            value={values.name}
            onChange={(event) => setValues((current) => ({ ...current, name: event.target.value }))}
            className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3"
            required
          />
        </div>

        <div>
          <label className="text-sm font-medium text-navy" htmlFor="slug">
            URL-slug
          </label>
          <input
            id="slug"
            value={values.slug}
            onChange={(event) => setValues((current) => ({ ...current, slug: event.target.value }))}
            className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3"
            placeholder="komfortpakke"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-navy" htmlFor="shortDescription">
            Kort beskrivelse
          </label>
          <input
            id="shortDescription"
            value={values.shortDescription}
            onChange={(event) =>
              setValues((current) => ({ ...current, shortDescription: event.target.value }))
            }
            className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3"
            required
          />
        </div>

        <div>
          <label className="text-sm font-medium text-navy" htmlFor="description">
            Fuld beskrivelse
          </label>
          <textarea
            id="description"
            value={values.description}
            onChange={(event) =>
              setValues((current) => ({ ...current, description: event.target.value }))
            }
            className="mt-2 min-h-32 w-full rounded-xl border border-gray-200 px-4 py-3"
            required
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="text-sm font-medium text-navy" htmlFor="price">
              Pris (DKK)
            </label>
            <input
              id="price"
              type="number"
              min="0"
              value={values.price}
              onChange={(event) => setValues((current) => ({ ...current, price: event.target.value }))}
              className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3"
              required
            />
          </div>
          <div>
            <label className="text-sm font-medium text-navy" htmlFor="salePrice">
              Tilbudspris (valgfri)
            </label>
            <input
              id="salePrice"
              type="number"
              min="0"
              value={values.salePrice}
              onChange={(event) =>
                setValues((current) => ({ ...current, salePrice: event.target.value }))
              }
              className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3"
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="text-sm font-medium text-navy" htmlFor="category">
              Kategori
            </label>
            <select
              id="category"
              value={values.category}
              onChange={(event) =>
                setValues((current) => ({
                  ...current,
                  category: event.target.value as ProductCategory,
                }))
              }
              className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3"
            >
              {categories.map((category) => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-sm font-medium text-navy" htmlFor="supportMonths">
              Tryghed (måneder)
            </label>
            <input
              id="supportMonths"
              type="number"
              min="0"
              value={values.supportMonths}
              onChange={(event) =>
                setValues((current) => ({ ...current, supportMonths: event.target.value }))
              }
              className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3"
              required
            />
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-navy" htmlFor="badge">
            Badge (valgfri)
          </label>
          <input
            id="badge"
            value={values.badge}
            onChange={(event) => setValues((current) => ({ ...current, badge: event.target.value }))}
            className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3"
            placeholder="Mest valgt"
          />
        </div>

        <label className="flex items-center gap-3 text-sm font-medium text-navy">
          <input
            type="checkbox"
            checked={values.featured}
            onChange={(event) =>
              setValues((current) => ({ ...current, featured: event.target.checked }))
            }
            className="h-4 w-4 rounded border-gray-300"
          />
          Vis på forsiden
        </label>

        <div>
          <label className="text-sm font-medium text-navy" htmlFor="specs">
            Specifikationer (én pr. linje)
          </label>
          <textarea
            id="specs"
            value={values.specs}
            onChange={(event) => setValues((current) => ({ ...current, specs: event.target.value }))}
            className="mt-2 min-h-32 w-full rounded-xl border border-gray-200 px-4 py-3"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-navy" htmlFor="included">
            Inkluderet (én pr. linje)
          </label>
          <textarea
            id="included"
            value={values.included}
            onChange={(event) =>
              setValues((current) => ({ ...current, included: event.target.value }))
            }
            className="mt-2 min-h-32 w-full rounded-xl border border-gray-200 px-4 py-3"
          />
        </div>

        {error && (
          <p className="text-sm text-red-600" role="alert">
            {error}
          </p>
        )}

        <div className="flex flex-wrap gap-3">
          <button
            type="submit"
            disabled={loading}
            className="rounded-xl bg-green px-6 py-3 font-semibold text-white hover:bg-green-hover disabled:opacity-60"
          >
            {loading ? "Gemmer…" : mode === "create" ? "Opret pakke" : "Gem ændringer"}
          </button>
          <button
            type="button"
            onClick={() => router.push("/admin/products")}
            className="rounded-xl border border-gray-200 px-6 py-3 font-semibold text-navy hover:bg-gray-50"
          >
            Annuller
          </button>
        </div>
      </div>

      <div className="space-y-6">
        <div className="rounded-2xl border border-gray-200 bg-white p-6">
          <label className="text-sm font-medium text-navy" htmlFor="image">
            Billedsti
          </label>
          <input
            id="image"
            value={values.image}
            onChange={(event) => setValues((current) => ({ ...current, image: event.target.value }))}
            className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3"
            placeholder="/products/komfortpakke.png"
            required
          />
          <p className="mt-2 text-sm text-muted">
            Upload billeder til `public/products/` og indsæt stien her.
          </p>
          {values.image && (
            <div className="relative mt-6 aspect-square overflow-hidden rounded-2xl bg-gray-50">
              <Image
                src={values.image}
                alt={values.name || "Produktbillede"}
                fill
                className="object-contain p-8"
              />
            </div>
          )}
        </div>
      </div>
    </form>
  );
}
