import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getAllProducts, getProductBySlug } from "@/lib/products-store";
import { Badge } from "@/components/ui/Badge";
import { PriceDisplay } from "@/components/ui/PriceDisplay";
import { AddToCartSection } from "./AddToCartSection";
import { getProductVariants, getStartingPrice } from "@/lib/product-variants";

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
  const variants = getProductVariants(product);

  return (
    <div className="bg-[#f6f8f7] py-10 md:py-14">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <nav className="mb-6 text-sm text-muted" aria-label="Brødkrumme">
          <Link href="/" className="hover:text-green">Hjem</Link>
          {" / "}
          <Link href="/butik" className="hover:text-green">Butik</Link>
          {" / "}
          <span className="text-navy">{product.name}</span>
        </nav>

        <div className="grid overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm lg:grid-cols-2">
          <div className="relative min-h-[380px] bg-gradient-to-br from-slate-50 via-white to-green/5 lg:min-h-[650px]">
            {(product.slug === "tryghedspakke" || (product.badge && product.slug !== "komfortpakke")) && (
              <div className="absolute left-4 top-4 z-10">
                <Badge variant="featured">
                  {product.slug === "tryghedspakke" ? "Mest valgt" : product.badge}
                </Badge>
              </div>
            )}
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain p-10 md:p-16"
              priority
            />
          </div>

          <div className="p-6 md:p-10 lg:p-12">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-green">{product.category === "pakker" ? "Komplet computerpakke" : "Personlig løsning"}</p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-navy md:text-4xl">{product.name}</h1>
            <div className="mt-4">
              <div className="flex items-baseline gap-2"><span className="text-sm font-semibold text-green">{variants.length ? "Fra" : ""}</span><PriceDisplay price={getStartingPrice(product)} size="lg" /></div>
            </div>
            <p className="mt-6 leading-relaxed text-muted">{product.description}</p>

            <div className="mt-6 rounded-2xl bg-navy px-5 py-4 text-white">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-green">Hurtig personlig kontakt</p>
              <p className="mt-1 font-bold">Gennemfør dit køb inden kl. 16 og bliv ringet op allerede i dag.</p>
              <p className="mt-1 text-sm leading-relaxed text-white/70">Køber du efter kl. 16, kontakter vi dig næste dag.</p>
            </div>

            <div className="mt-7 rounded-2xl border border-green/20 bg-green/5 p-5">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-green">Det følger med</p>
              <ul className="mt-3 space-y-3">
              {product.included.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-navy">
                  <span className="text-green">✔</span>
                  {item}
                </li>
              ))}
              {product.supportMonths > 0 && <li className="flex items-start gap-2 text-sm font-semibold text-navy"><span className="text-green">✔</span>{product.supportMonths} måneders personlig tryghed og fjernhjælp</li>}
              </ul>
            </div>

            <AddToCartSection product={product} />

            <div className="mt-10 border-t border-slate-100 pt-7">
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
