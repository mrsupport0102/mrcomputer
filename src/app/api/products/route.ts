import { NextResponse } from "next/server";
import { getAllProducts } from "@/lib/products-store";
import { getSiteUrl } from "@/lib/site";

/** Product feed API – ready for external integrations */
export async function GET() {
  const siteUrl = getSiteUrl();
  const products = await getAllProducts();
  const feed = products.map(({ id, slug, name, price, salePrice, category, specs }) => ({
    id,
    slug,
    name,
    price,
    salePrice: salePrice ?? null,
    category,
    specs,
    url: `${siteUrl}/produkter/${slug}`,
  }));

  return NextResponse.json({
    siteUrl,
    updatedAt: new Date().toISOString(),
    count: feed.length,
    products: feed,
  });
}
