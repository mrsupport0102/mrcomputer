"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Product } from "@/lib/types";
import { formatPrice } from "@/lib/format-price";

interface ProductTableProps {
  products: Product[];
}

export function ProductTable({ products }: ProductTableProps) {
  const router = useRouter();

  async function handleDelete(id: string, name: string) {
    if (!window.confirm(`Slet "${name}"? Dette kan ikke fortrydes.`)) {
      return;
    }

    const response = await fetch(`/api/admin/products/${id}`, { method: "DELETE" });
    if (!response.ok) {
      const data = (await response.json()) as { error?: string };
      window.alert(data.error ?? "Kunne ikke slette produktet");
      return;
    }

    router.refresh();
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-muted">
              Produkt
            </th>
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-muted">
              Kategori
            </th>
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-muted">
              Pris
            </th>
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-muted">
              Forside
            </th>
            <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wide text-muted">
              Handlinger
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {products.map((product) => (
            <tr key={product.id}>
              <td className="px-4 py-4">
                <p className="font-semibold text-navy">{product.name}</p>
                <p className="text-sm text-muted">/{product.slug}</p>
              </td>
              <td className="px-4 py-4 text-sm text-navy">{product.category}</td>
              <td className="px-4 py-4 text-sm text-navy">
                {formatPrice(product.salePrice ?? product.price)}
              </td>
              <td className="px-4 py-4 text-sm text-navy">
                {product.featured ? "Ja" : "Nej"}
              </td>
              <td className="px-4 py-4">
                <div className="flex justify-end gap-2">
                  <Link
                    href={`/admin/products/${product.id}/edit`}
                    className="rounded-lg bg-navy px-3 py-2 text-sm font-medium text-white hover:bg-navy-light"
                  >
                    Rediger
                  </Link>
                  <button
                    type="button"
                    onClick={() => handleDelete(product.id, product.name)}
                    className="rounded-lg border border-red-200 px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50"
                  >
                    Slet
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
