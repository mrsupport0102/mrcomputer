import Link from "next/link";
import { getAllProducts } from "@/lib/products-store";
import { formatPrice } from "@/lib/format-price";

export const metadata = {
  title: "Admin overblik",
};

export default async function AdminDashboardPage() {
  const products = await getAllProducts();
  const featuredCount = products.filter((product) => product.featured).length;
  const averagePrice =
    products.reduce((sum, product) => sum + (product.salePrice ?? product.price), 0) /
    Math.max(products.length, 1);

  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-navy">Overblik</h2>
          <p className="mt-2 text-muted">Administrer pakker, priser og indhold i webshoppen.</p>
        </div>
        <Link
          href="/admin/products/new"
          className="rounded-xl bg-green px-5 py-3 font-semibold text-white hover:bg-green-hover"
        >
          Opret ny pakke
        </Link>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-gray-200 bg-white p-6">
          <p className="text-sm text-muted">Produkter i alt</p>
          <p className="mt-2 text-3xl font-bold text-navy">{products.length}</p>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-6">
          <p className="text-sm text-muted">Vises på forsiden</p>
          <p className="mt-2 text-3xl font-bold text-navy">{featuredCount}</p>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-6">
          <p className="text-sm text-muted">Gennemsnitspris</p>
          <p className="mt-2 text-3xl font-bold text-navy">{formatPrice(averagePrice)}</p>
        </div>
      </div>

      <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6">
        <h3 className="text-lg font-bold text-navy">Hurtige genveje</h3>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href="/admin/products"
            className="rounded-xl bg-navy px-4 py-3 text-sm font-semibold text-white hover:bg-navy-light"
          >
            Se alle produkter
          </Link>
          <Link
            href="/butik"
            className="rounded-xl border border-gray-200 px-4 py-3 text-sm font-semibold text-navy hover:bg-gray-50"
          >
            Se butikken
          </Link>
          <Link
            href="/kurv"
            className="rounded-xl border border-gray-200 px-4 py-3 text-sm font-semibold text-navy hover:bg-gray-50"
          >
            Test kurv
          </Link>
        </div>
      </div>
    </div>
  );
}
