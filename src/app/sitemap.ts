import type { MetadataRoute } from "next";
import { products } from "@/data/products";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mrcomputer.dk";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/butik",
    "/forloeb",
    "/tryghedsaftale",
    "/kontakt",
    "/kurv",
    "/kurv/tak",
    "/handelsbetingelser",
  ];

  return [
    ...staticPages.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.8,
    })),
    ...products.map((product) => ({
      url: `${baseUrl}/produkter/${product.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
  ];
}
