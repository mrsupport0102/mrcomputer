import { NextResponse } from "next/server";
import { products } from "@/data/products";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mrcomputer.dk";

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
    url: `${siteUrl}/produkter/${slug}`,
  }));

  return NextResponse.json({
    siteUrl,
    updatedAt: new Date().toISOString(),
    count: feed.length,
    products: feed,
  });
}
