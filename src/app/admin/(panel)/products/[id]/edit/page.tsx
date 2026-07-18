import { notFound } from "next/navigation";
import { ProductForm } from "@/components/admin/ProductForm";
import { getProductById } from "@/lib/products-store";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const product = await getProductById(id);
  return {
    title: product ? `Rediger ${product.name}` : "Rediger produkt",
  };
}

export default async function EditProductPage({ params }: Props) {
  const { id } = await params;
  const product = await getProductById(id);

  if (!product) {
    notFound();
  }

  return (
    <div>
      <h2 className="text-3xl font-bold text-navy">Rediger pakke</h2>
      <p className="mt-2 text-muted">Opdater pris, tekst, billede og indhold for {product.name}.</p>
      <div className="mt-8">
        <ProductForm mode="edit" product={product} />
      </div>
    </div>
  );
}
