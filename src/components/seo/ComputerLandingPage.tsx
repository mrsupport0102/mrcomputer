import Link from "next/link";
import { ProductCard } from "@/components/shop/ProductCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { getAllProducts } from "@/lib/products-store";
import { absoluteUrl } from "@/lib/seo";

export type ComputerLandingConfig = {
  path: string;
  eyebrow: string;
  title: string;
  intro: string;
  productSlugs: string[];
  sections: { title: string; text: string }[];
  faq: { question: string; answer: string }[];
};

export async function ComputerLandingPage({ config }: { config: ComputerLandingConfig }) {
  const allProducts = await getAllProducts();
  const products = config.productSlugs
    .map((slug) => allProducts.find((product) => product.slug === slug))
    .filter((product): product is NonNullable<typeof product> => Boolean(product));

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: config.title,
      description: config.intro,
      url: absoluteUrl(config.path),
      mainEntity: {
        "@type": "ItemList",
        itemListElement: products.map((product, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: product.name,
          url: absoluteUrl(`/produkter/${product.slug}`),
        })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: config.faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
  ];

  return (
    <main className="bg-[#f6f8f7] py-8 md:py-14">
      <JsonLd data={jsonLd} />
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <nav className="mb-5 text-sm text-muted" aria-label="Brødkrumme">
          <Link href="/" className="hover:text-green">Hjem</Link> / {config.title}
        </nav>

        <header className="rounded-[2rem] bg-navy px-6 py-10 text-white md:px-12 md:py-14">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-green">{config.eyebrow}</p>
          <h1 className="mt-3 max-w-4xl text-3xl font-bold tracking-tight md:text-5xl">{config.title}</h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/75 md:text-lg">{config.intro}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="#computere" className="rounded-full bg-green px-6 py-3 font-bold text-white">Se computerne</Link>
            <Link href="tel:+4531364524" className="rounded-full border border-white/30 px-6 py-3 font-bold text-white">Ring 31 36 45 24</Link>
          </div>
        </header>

        <section id="computere" className="py-12">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-green">Udvalgte løsninger</p>
          <h2 className="mt-2 text-3xl font-bold text-navy">Vælg computer efter dit behov</h2>
          <div className="mt-7 grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3">
            {products.map((product) => <ProductCard key={product.id} product={product} />)}
          </div>
        </section>

        <section className="grid gap-5 py-6 md:grid-cols-3">
          {config.sections.map((section) => (
            <article key={section.title} className="rounded-3xl border border-slate-200 bg-white p-6">
              <h2 className="text-xl font-bold text-navy">{section.title}</h2>
              <p className="mt-3 leading-relaxed text-muted">{section.text}</p>
            </article>
          ))}
        </section>

        <section className="mx-auto max-w-4xl py-12">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-green">Værd at vide</p>
          <h2 className="mt-2 text-3xl font-bold text-navy">Ofte stillede spørgsmål</h2>
          <div className="mt-6 space-y-3">
            {config.faq.map((item) => (
              <details key={item.question} className="rounded-2xl border border-slate-200 bg-white p-5">
                <summary className="cursor-pointer font-bold text-navy">{item.question}</summary>
                <p className="mt-3 leading-relaxed text-muted">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="rounded-[2rem] bg-white p-7 text-center shadow-sm md:p-10">
          <h2 className="text-2xl font-bold text-navy">Din computer bliver leveret klar til brug</h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted">Vi aftaler afhentning, flytter dine filer og installerer den nye computer korrekt hjemme hos dig.</p>
          <Link href="/forloeb" className="mt-6 inline-flex rounded-full bg-navy px-6 py-3 font-bold text-white">Se hele forløbet</Link>
        </section>
      </div>
    </main>
  );
}
