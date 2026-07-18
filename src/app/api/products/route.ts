import { NextResponse } from "next/server";
import { products } from "@/data/products";

/** Product feed API – ready for external integrations */
export async function GET() {
  const feed = products.map(({ id, slug, name, price, salePrice, category, specs }) => ({
    id,
    slug,
    name,
    price,
    salePrice: salePrice ?? null,
    category,
    specs,
    url: `/produkter/${slug}`,
  }));

  return NextResponse.json({
    updatedAt: new Date().toISOString(),
    count: feed.length,
    products: feed,
  });
}
