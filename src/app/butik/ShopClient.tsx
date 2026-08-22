"use client";

import { useMemo, useState } from "react";
import { ProductCard } from "@/components/shop/ProductCard";
import { Product, ProductCategory } from "@/lib/types";

const categories: { value: ProductCategory | "all"; label: string }[] = [
  { value: "all", label: "Alle" },
  { value: "pakker", label: "Pakker" },
  { value: "ydelser", label: "Ydelser" },
  { value: "tilbehor", label: "Tilbehør" },
];

type SortOption = "default" | "price-asc" | "price-desc" | "name";

const defaultOrder = ["tryghedspakke", "budgetpakke", "komfortpakke", "apple-macbook-pakke", "premiumpakke", "gamerpakke"];

interface ShopClientProps {
  products: Product[];
}

export default function ShopClient({ products }: ShopClientProps) {
  const [category, setCategory] = useState<ProductCategory | "all">("all");
  const [sort, setSort] = useState<SortOption>("default");

  const filtered = useMemo(() => {
    const result =
      category === "all"
        ? [...products]
        : products.filter((product) => product.category === category);

    switch (sort) {
      case "default":
        result.sort((a, b) => {
          const aIndex = defaultOrder.indexOf(a.slug);
          const bIndex = defaultOrder.indexOf(b.slug);
          return (aIndex === -1 ? 99 : aIndex) - (bIndex === -1 ? 99 : bIndex);
        });
        break;
      case "price-asc":
        result.sort(
          (a, b) => (a.salePrice ?? a.price) - (b.salePrice ?? b.price)
        );
        break;
      case "price-desc":
        result.sort(
          (a, b) => (b.salePrice ?? b.price) - (a.salePrice ?? a.price)
        );
        break;
      case "name":
        result.sort((a, b) => a.name.localeCompare(b.name, "da"));
        break;
    }

    return result;
  }, [category, products, sort]);

  return (
    <div className="bg-[#f6f8f7] py-5 sm:py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-6">
        <div className="rounded-2xl bg-navy px-4 py-5 text-white sm:rounded-[2rem] sm:px-6 sm:py-8 md:px-10 md:py-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-green">Alle løsninger</p>
          <h1 className="mt-2 text-2xl font-bold tracking-tight sm:mt-3 sm:text-3xl md:text-5xl">Mere end bare hardware</h1>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/70 sm:mt-4 sm:text-base">
            Vælg computer efter dit behov eller køb tryghed uden computer. Vores pakker samler udstyr, klargøring, dataoverførsel og personlig tryghed i én gennemskuelig pris.
          </p>
          <div className="mt-6 hidden flex-wrap gap-2 text-xs font-semibold sm:flex">
            {["Personlig rådgivning", "Opsat ved levering", "Data flyttet", "Tryghed bagefter"].map((item) => <span key={item} className="rounded-full bg-white/10 px-3 py-2"><span className="text-green">✓</span> {item}</span>)}
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between gap-2 sm:mt-8 sm:flex-wrap sm:gap-4">
          <div className="flex min-w-0 gap-1.5 overflow-x-auto pb-1 sm:flex-wrap sm:gap-2 sm:overflow-visible sm:pb-0">
            {categories.map((cat) => (
              <button
                key={cat.value}
                type="button"
                onClick={() => setCategory(cat.value)}
                className={`shrink-0 rounded-full px-3 py-2 text-xs font-medium transition-colors sm:px-4 sm:text-sm ${
                  category === cat.value
                    ? "bg-navy text-white shadow-sm"
                    : "border border-slate-200 bg-white text-navy hover:border-green/40"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <select
            value={sort}
            onChange={(event) => setSort(event.target.value as SortOption)}
            className="max-w-28 shrink-0 rounded-lg border border-gray-200 bg-white px-2 py-2 text-xs sm:max-w-none sm:px-4 sm:text-sm"
            aria-label="Sortér produkter"
          >
            <option value="default">Standardsortering</option>
            <option value="price-asc">Pris: lav til høj</option>
            <option value="price-desc">Pris: høj til lav</option>
            <option value="name">Navn</option>
          </select>
        </div>

        <p className="mt-3 text-xs text-muted sm:mt-6 sm:text-sm">
          Viser {filtered.length} resultater
        </p>

        <div className="mt-3 grid grid-cols-2 gap-2.5 sm:mt-6 sm:gap-6 lg:grid-cols-3">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
