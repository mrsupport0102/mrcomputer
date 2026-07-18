import type { Metadata } from "next";
import { getAllProducts } from "@/lib/products-store";
import ShopClient from "./ShopClient";

export const metadata: Metadata = {
  title: "Butik",
  description: "Se alle computerpakker og ydelser fra MR Computer.",
};

export const revalidate = 60;

export default async function ShopPage() {
  const products = await getAllProducts();
  return <ShopClient products={products} />;
}
