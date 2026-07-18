import Link from "next/link";
import { ProductTable } from "@/components/admin/ProductTable";
import { getAllProducts } from "@/lib/products-store";

export const metadata = {
  title: "Admin produkter",
};

export default async function AdminProductsPage() {
  const products = await getAllProducts();

  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-navy">Produkter</h2>
          <p className="mt-2 text-muted">Opret, rediger og slet computerpakker og ydelser.</p>
        </div>
        <Link
          href="/admin/products/new"
          className="rounded-xl bg-green px-5 py-3 font-semibold text-white hover:bg-green-hover"
        >
          Opret pakke
        </Link>
      </div>

      <div className="mt-8">
        <ProductTable products={products} />
      </div>
    </div>
  );
}
