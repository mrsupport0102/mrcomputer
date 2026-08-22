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
    <div className="bg-[#f6f8f7] py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="rounded-[2rem] bg-navy px-6 py-8 text-white md:px-10 md:py-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-green">Alle løsninger</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">Mere end bare hardware</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70">
            Vælg computer efter dit behov eller få hjælp uden computerkøb. Vores pakker samler udstyr, klargøring, dataoverførsel og personlig IT-hjælp i én gennemskuelig pris.
          </p>
          <div className="mt-6 flex flex-wrap gap-2 text-xs font-semibold">
            {["Personlig rådgivning", "Opsat ved levering", "Data flyttet", "Hjælp bagefter"].map((item) => <span key={item} className="rounded-full bg-white/10 px-3 py-2"><span className="text-green">✓</span> {item}</span>)}
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.value}
                type="button"
                onClick={() => setCategory(cat.value)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
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
            className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm"
            aria-label="Sortér produkter"
          >
            <option value="default">Standardsortering</option>
            <option value="price-asc">Pris: lav til høj</option>
            <option value="price-desc">Pris: høj til lav</option>
            <option value="name">Navn</option>
          </select>
        </div>

        <p className="mt-6 text-sm text-muted">
          Viser {filtered.length} resultater
        </p>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
