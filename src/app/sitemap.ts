import type { MetadataRoute } from "next";
import { getAllProducts } from "@/lib/products-store";
import { computerGuides } from "@/lib/computer-guides";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mrcomputer.dk";
const contentLastModified = new Date("2026-08-22");

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const products = await getAllProducts();
  const staticPages = [
    "",
    "/butik",
    "/forloeb",
    "/tryghedsaftale",
    "/kontakt",
    "/handelsbetingelser",
    "/baerbar-computer",
    "/computer-klar-til-brug",
    "/computer-til-seniorer",
    "/macbook-klar-til-brug",
    "/gaming-computer",
    "/guides",
  ];

  return [
    ...staticPages.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: contentLastModified,
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.8,
    })),
    ...products.map((product) => ({
      url: `${baseUrl}/produkter/${product.slug}`,
      lastModified: contentLastModified,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
    ...computerGuides.map((guide) => ({
      url: `${baseUrl}/guides/${guide.slug}`,
      lastModified: contentLastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
