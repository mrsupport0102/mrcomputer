import type { Metadata } from "next";
import { getAllProducts } from "@/lib/products-store";
import ShopClient from "./ShopClient";
import { JsonLd } from "@/components/seo/JsonLd";
import { absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Bærbare computere og computerpakker klar til brug",
  description:
    "Find en bærbar computer eller komplet computerpakke med opsætning, dataoverførsel og personlig tryghed.",
  alternates: { canonical: "/butik" },
};

export const revalidate = 60;

export default async function ShopPage() {
  const products = await getAllProducts();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Bærbare computere og computerpakker klar til brug",
    url: absoluteUrl("/butik"),
    mainEntity: {
      "@type": "ItemList",
      itemListElement: products.map((product, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: product.name,
        url: absoluteUrl(`/produkter/${product.slug}`),
      })),
    },
  };
  return <><JsonLd data={jsonLd} /><ShopClient products={products} /></>;
}
