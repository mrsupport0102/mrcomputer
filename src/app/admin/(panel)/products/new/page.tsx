import { ProductForm } from "@/components/admin/ProductForm";

export const metadata = {
  title: "Opret produkt",
};

export default function NewProductPage() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-navy">Opret ny pakke</h2>
      <p className="mt-2 text-muted">Udfyld produktoplysningerne og gem pakken i webshoppen.</p>
      <div className="mt-8">
        <ProductForm mode="create" />
      </div>
    </div>
  );
}
