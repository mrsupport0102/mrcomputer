import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getAllProducts, getProductBySlug } from "@/lib/products-store";
import { Badge } from "@/components/ui/Badge";
import { PriceDisplay } from "@/components/ui/PriceDisplay";
import { AddToCartSection } from "./AddToCartSection";

interface Props {
  params: Promise<{ slug: string }>;
}

export const revalidate = 60;

export async function generateStaticParams() {
  const products = await getAllProducts();
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) return { title: "Produkt ikke fundet" };
  return {
    title: product.name,
    description: product.shortDescription,
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) notFound();

  return (
    <div className="py-12">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <nav className="mb-6 text-sm text-muted" aria-label="Brødkrumme">
          <Link href="/" className="hover:text-green">Hjem</Link>
          {" / "}
          <Link href="/butik" className="hover:text-green">Butik</Link>
          {" / "}
          <span className="text-navy">{product.name}</span>
        </nav>

        <div className="grid gap-10 lg:grid-cols-2">
          <div className="relative aspect-square overflow-hidden rounded-2xl bg-gray-50">
            {product.badge && (
              <div className="absolute left-4 top-4 z-10">
                <Badge variant={product.salePrice ? "sale" : "featured"}>
                  {product.badge}
                </Badge>
              </div>
            )}
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain p-12"
              priority
            />
          </div>

          <div>
            <h1 className="text-3xl font-bold text-navy">{product.name}</h1>
            <div className="mt-4">
              <PriceDisplay price={product.price} salePrice={product.salePrice} size="lg" />
            </div>
            <p className="mt-6 leading-relaxed text-muted">{product.description}</p>

            {product.supportMonths > 0 && (
              <p className="mt-4 rounded-lg bg-green/10 px-4 py-3 text-sm font-medium text-navy">
                {product.supportMonths} måneders inkluderet tryghed &amp; fjernstyring
              </p>
            )}

            <ul className="mt-6 space-y-2">
              {product.included.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-navy">
                  <span className="text-green">✔</span>
                  {item}
                </li>
              ))}
            </ul>

            <AddToCartSection product={product} />

            <div className="mt-10">
              <h2 className="text-lg font-bold text-navy">Specifikationer</h2>
              <ul className="mt-4 space-y-2">
                {product.specs.map((spec) => (
                  <li key={spec} className="text-sm text-muted">
                    • {spec}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
