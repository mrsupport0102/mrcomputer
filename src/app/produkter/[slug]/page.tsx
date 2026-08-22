import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getAllProducts, getProductBySlug } from "@/lib/products-store";
import { Badge } from "@/components/ui/Badge";
import { PriceDisplay } from "@/components/ui/PriceDisplay";
import { AddToCartSection } from "./AddToCartSection";
import { getProductVariants, getStartingPrice, getVariantPackagePrice } from "@/lib/product-variants";
import { JsonLd } from "@/components/seo/JsonLd";
import { absoluteUrl } from "@/lib/seo";

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
  const title = product.category === "pakker"
    ? `${product.name.replace(" – Klar til brug", "")} – computer klar til brug`
    : product.name;
  const description = product.category === "pakker"
    ? `${product.shortDescription} Inkl. opsætning, dataoverførsel og installation hjemme hos dig.`
    : product.shortDescription;
  return {
    title,
    description,
    alternates: { canonical: `/produkter/${product.slug}` },
    openGraph: {
      type: "website",
      title,
      description,
      images: [{ url: product.image, alt: product.name }],
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) notFound();
  const variants = getProductVariants(product);
  const startingPrice = getStartingPrice(product);
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "@id": `${absoluteUrl(`/produkter/${product.slug}`)}#product`,
      name: product.name,
      description: product.description,
      image: [absoluteUrl(product.image)],
      brand: { "@type": "Brand", name: "MR Computer" },
      sku: product.id,
      category: product.category === "pakker" ? "Computerpakke" : product.category,
      offers: {
        "@type": "AggregateOffer",
        url: absoluteUrl(`/produkter/${product.slug}`),
        priceCurrency: "DKK",
        lowPrice: startingPrice,
        highPrice: variants.length
          ? Math.max(...variants.map(getVariantPackagePrice))
          : startingPrice,
        offerCount: variants.length || 1,
        availability: "https://schema.org/InStock",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Hjem", item: absoluteUrl("/") },
        { "@type": "ListItem", position: 2, name: "Butik", item: absoluteUrl("/butik") },
        { "@type": "ListItem", position: 3, name: product.name, item: absoluteUrl(`/produkter/${product.slug}`) },
      ],
    },
  ];

  return (
    <div className="bg-[#f6f8f7] py-10 md:py-14">
      <JsonLd data={jsonLd} />
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

        {variants.length > 0 && (
          <section className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-6 md:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-green">Populære modeller i pakken</p>
            <h2 className="mt-2 text-2xl font-bold text-navy">Vælg den computer der passer til dit behov</h2>
            <p className="mt-3 max-w-3xl leading-relaxed text-muted">
              Alle viste priser er komplette pakkepriser med den opsætning, dataoverførsel, installation og personlige tryghed, der følger med {product.name.toLowerCase()}.
            </p>
            <div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {variants.map((variant) => (
                <article key={variant.id} id={variant.id} className="rounded-2xl border border-slate-200 bg-[#f8faf9] p-5">
                  <h3 className="font-bold text-navy">{variant.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{variant.specifications}</p>
                  <p className="mt-4 text-lg font-bold text-navy">
                    {new Intl.NumberFormat("da-DK", { style: "currency", currency: "DKK", maximumFractionDigits: 0 }).format(getVariantPackagePrice(variant))}
                  </p>
                  <p className="mt-1 text-xs font-semibold text-green">Komplet pakkepris</p>
                </article>
              ))}
            </div>
          </section>
        )}

        {product.category === "pakker" && (
          <nav className="mt-8 rounded-3xl bg-navy p-6 text-white" aria-label="Relaterede computerkategorier">
            <p className="font-bold">Se også</p>
            <div className="mt-3 flex flex-wrap gap-2 text-sm">
              <Link href="/baerbar-computer" className="rounded-full bg-white/10 px-4 py-2 hover:bg-white/20">Bærbare computere</Link>
              <Link href="/computer-klar-til-brug" className="rounded-full bg-white/10 px-4 py-2 hover:bg-white/20">Computer klar til brug</Link>
              <Link href="/computer-til-seniorer" className="rounded-full bg-white/10 px-4 py-2 hover:bg-white/20">Computer til seniorer</Link>
              <Link href="/forloeb" className="rounded-full bg-white/10 px-4 py-2 hover:bg-white/20">Sådan foregår det</Link>
            </div>
          </nav>
        )}
      </div>
    </div>
  );
}
