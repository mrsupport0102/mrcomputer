import { Product, ProductVariant } from "@/lib/types";

const PACKAGE_MARGIN = 7000;

const everyday: ProductVariant[] = [
  { id: "lenovo-v15-g4", name: "Lenovo V15 Gen 4", specifications: "Ryzen 5 · 16 GB · 512 GB SSD · 15,6\"", retailer: "Proshop", sourcePrice: 3995, sourceUrl: "https://www.proshop.dk/Baerbar/Lenovo", checkedAt: "2026-08-22" },
  { id: "hp-envy-x360", name: "HP Envy x360 13", specifications: "Ryzen 3 · 8 GB · 256 GB SSD · touchskærm", retailer: "Elgiganten", sourcePrice: 4837, sourceUrl: "https://www.elgiganten.dk/product/computer-kontor/computere/barbar-computer/hp-envy-x360-ay0828no-13-2-in-1/204965", checkedAt: "2026-08-22" },
  { id: "ideapad-slim3-r7", name: "Lenovo IdeaPad Slim 3", specifications: "Ryzen 7 · 16 GB · 512 GB SSD · 15,6\"", retailer: "Proshop", sourcePrice: 5499, sourceUrl: "https://www.proshop.dk/Baerbar/Lenovo-IdeaPad-Slim-3-156-Ryzen-7-16GB-512GB/3443691", checkedAt: "2026-08-22" },
  { id: "ideapad-slim5-u5", name: "Lenovo IdeaPad Slim 5", specifications: "Core Ultra 5 · 16 GB · 512 GB SSD · 14\"", retailer: "Proshop", sourcePrice: 5799, sourceUrl: "https://www.proshop.dk/Baerbar/Lenovo", checkedAt: "2026-08-22" },
  { id: "thinkbook-16-g9", name: "Lenovo ThinkBook 16 G9", specifications: "Ryzen 5 · 16 GB · 512 GB SSD · Windows 11 Pro", retailer: "Fcomputer", sourcePrice: 7300, sourceUrl: "https://www.fcomputer.dk/ts-tb-16-g9-ryz-5-220-16gb-512gb-w11p", checkedAt: "2026-08-22" },
];

const comfort: ProductVariant[] = [
  everyday[2],
  everyday[3],
  everyday[4],
  { id: "ideapad-5-oled", name: "Lenovo IdeaPad 5 2-i-1", specifications: "Ryzen AI 5 · 16 GB · 512 GB SSD · OLED touch", retailer: "Fcomputer", sourcePrice: 7499, sourceUrl: "https://www.fcomputer.dk/lenovo-ideapad-5-2-in-1-14akp10-baerbar-pc-amd-ryzen-ai-5-pro-340-16gb-ddr5-ram-512gb-ssd-14-wuxga-oled-touch-windows-11-home-83kt0005mx", checkedAt: "2026-08-22" },
  { id: "ideapad-slim5-ai", name: "Lenovo IdeaPad Slim 5 16", specifications: "Ryzen AI 5 · 16 GB · 1 TB SSD · 16\"", retailer: "Fcomputer", sourcePrice: 8032, sourceUrl: "https://www.fcomputer.dk/lenovo-ideapad-slim-5-16akp10-16-wuxga-ryzen-ai-5-340-16gb-1tb-ssd-win11", checkedAt: "2026-08-22" },
];

const premium: ProductVariant[] = [
  comfort[3], comfort[4],
  { id: "thinkpad-e14-g7", name: "Lenovo ThinkPad E14 Gen 7", specifications: "Ryzen 7 · 32 GB · 512 GB SSD · 14\"", retailer: "Proshop", sourcePrice: 8499, sourceUrl: "https://www.proshop.dk/Baerbar/Lenovo", checkedAt: "2026-08-22" },
  { id: "ideapad-slim5-2in1", name: "Lenovo IdeaPad Slim 5 2-i-1", specifications: "Ryzen AI 7 · 24 GB · 1 TB SSD · touchskærm", retailer: "Proshop", sourcePrice: 8999, sourceUrl: "https://www.proshop.dk/Baerbar/Lenovo", checkedAt: "2026-08-22" },
  { id: "ideapad-pro5", name: "Lenovo IdeaPad Pro 5 OLED", specifications: "Ryzen 7 · 16 GB · 1 TB SSD · RTX 3050", retailer: "Proshop", sourcePrice: 9999, sourceUrl: "https://www.proshop.dk/Baerbar/Lenovo", checkedAt: "2026-08-22" },
];

const gaming: ProductVariant[] = [
  { id: "loq-rtx3050", name: "Lenovo LOQ Essential", specifications: "Ryzen 5 · 16 GB · 512 GB SSD · RTX 3050", retailer: "Elgiganten", sourcePrice: 5499, sourceUrl: "https://www.elgiganten.dk/black-friday/computer-kontor", checkedAt: "2026-08-22" },
  premium[4],
  { id: "loq-rtx5060", name: "Lenovo LOQ RTX 5060", specifications: "Ryzen 7 · 16 GB · 1 TB SSD · RTX 5060", retailer: "Proshop", sourcePrice: 10499, sourceUrl: "https://www.proshop.dk/Baerbar/Lenovo", checkedAt: "2026-08-22" },
  { id: "loq-tower-rtx5060", name: "Lenovo LOQ Tower RTX 5060", specifications: "Core i5 · 16 GB · 1 TB SSD · RTX 5060", retailer: "Fcomputer", sourcePrice: 10597, sourceUrl: "https://www.fcomputer.dk/lenovo-loq-tower-17irr9-intel-core-i5-i5-14400f-16-gb-ddr5-sdram-1-tb-ssd-nvidia-geforce-rtx-5060-windows-11-home-pc-sort", checkedAt: "2026-08-22" },
  { id: "legion-pro7", name: "Lenovo Legion Pro 7", specifications: "32 GB · 1 TB SSD · RTX 5070 Ti", retailer: "Proshop", sourcePrice: 20999, sourceUrl: "https://www.proshop.dk/Baerbar/Lenovo", checkedAt: "2026-08-22" },
];

// Apple-priserne er baseret på de aktuelle standardkonfigurationer i dansk detail.
const apple: ProductVariant[] = [
  { id: "macbook-air-13-256", name: "MacBook Air 13\"", specifications: "M4 · 16 GB · 256 GB SSD", retailer: "Elgiganten", sourcePrice: 7991, sourceUrl: "https://www.elgiganten.dk/product/computer-kontor/computere/barbar-computer/macbook-air-13-m4-16256gb-midnat/905760", checkedAt: "2026-08-22" },
  { id: "macbook-air-13-512", name: "MacBook Air 13\"", specifications: "M4 · 16 GB · 512 GB SSD", retailer: "Proshop", sourcePrice: 10499, sourceUrl: "https://www.proshop.dk/MacBook", checkedAt: "2026-08-22" },
  { id: "macbook-air-15-256", name: "MacBook Air 15\"", specifications: "M4 · 16 GB · 256 GB SSD", retailer: "Elgiganten", sourcePrice: 10499, sourceUrl: "https://www.elgiganten.dk/brand/apple/mac/macbook-air", checkedAt: "2026-08-22" },
  { id: "macbook-air-15-512", name: "MacBook Air 15\"", specifications: "M4 · 16 GB · 512 GB SSD", retailer: "Proshop", sourcePrice: 12499, sourceUrl: "https://www.proshop.dk/MacBook", checkedAt: "2026-08-22" },
  { id: "macbook-pro-14", name: "MacBook Pro 14\"", specifications: "M4 · 16 GB · 512 GB SSD", retailer: "Proshop", sourcePrice: 13999, sourceUrl: "https://www.proshop.dk/MacBook", checkedAt: "2026-08-22" },
];

const variantsBySlug: Record<string, ProductVariant[]> = {
  budgetpakke: everyday,
  tryghedspakke: everyday,
  komfortpakke: comfort,
  premiumpakke: premium,
  gamerpakke: gaming,
  "apple-macbook-pakke": apple,
};

export function getProductVariants(product: Product): ProductVariant[] {
  return variantsBySlug[product.slug] ?? [];
}

export function getVariantPackagePrice(variant: ProductVariant): number {
  return variant.sourcePrice + PACKAGE_MARGIN;
}

export function getStartingPrice(product: Product): number {
  const variants = getProductVariants(product);
  if (!variants.length) return product.salePrice ?? product.price;
  return Math.min(...variants.map(getVariantPackagePrice));
}

export function productWithVariant(product: Product, variant: ProductVariant): Product {
  return {
    ...product,
    id: `${product.id}-${variant.id}`,
    name: `${product.name.replace(" – Klar til brug", "")} · ${variant.name}`,
    shortDescription: variant.specifications,
    price: getVariantPackagePrice(variant),
    salePrice: undefined,
    specs: [variant.name, variant.specifications, ...product.specs.filter((spec) => !spec.toLowerCase().includes("lenovo") && !spec.toLowerCase().includes("macbook"))],
  };
}
