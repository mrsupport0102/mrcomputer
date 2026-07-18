"use client";

import { useMemo, useState } from "react";
import { products } from "@/data/products";
import { ProductCard } from "@/components/shop/ProductCard";
import { ProductCategory } from "@/lib/types";

const categories: { value: ProductCategory | "all"; label: string }[] = [
  { value: "all", label: "Alle" },
  { value: "pakker", label: "Pakker" },
  { value: "ydelser", label: "Ydelser" },
  { value: "tilbehor", label: "Tilbehør" },
];

type SortOption = "default" | "price-asc" | "price-desc" | "name";

export default function ShopClient() {
  const [category, setCategory] = useState<ProductCategory | "all">("all");
  const [sort, setSort] = useState<SortOption>("default");

  const filtered = useMemo(() => {
    const result =
      category === "all"
        ? [...products]
        : products.filter((p) => p.category === category);

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
  }, [category, sort]);

  return (
    <div className="py-12">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <h1 className="text-3xl font-bold text-navy">Butik</h1>
        <p className="mt-2 text-muted">
          Opsætning, hjemmeinstallation og dataoverførsel er altid inkluderet. 6
          eller 12 måneders fast support medfølger.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.value}
                type="button"
                onClick={() => setCategory(cat.value)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  category === cat.value
                    ? "bg-navy text-white"
                    : "bg-gray-100 text-navy hover:bg-gray-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortOption)}
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
