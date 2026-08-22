import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/seo/JsonLd";
import { absoluteUrl } from "@/lib/seo";
import { computerGuides, getComputerGuide } from "@/lib/computer-guides";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return computerGuides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const guide = getComputerGuide((await params).slug);
  if (!guide) return { title: "Guide ikke fundet", robots: { index: false } };
  return {
    title: guide.title,
    description: guide.description,
    alternates: { canonical: `/guides/${guide.slug}` },
  };
}

export default async function GuidePage({ params }: Props) {
  const guide = getComputerGuide((await params).slug);
  if (!guide) notFound();
  const url = absoluteUrl(`/guides/${guide.slug}`);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.description,
    url,
    mainEntityOfPage: url,
    author: { "@type": "Organization", "@id": `${absoluteUrl("/")}#organization`, name: "MR Computer" },
    publisher: { "@type": "Organization", "@id": `${absoluteUrl("/")}#organization`, name: "MR Computer" },
    datePublished: "2026-08-22",
    dateModified: "2026-08-22",
  };

  return (
    <main className="bg-[#f6f8f7] py-10 md:py-16">
      <JsonLd data={jsonLd} />
      <article className="mx-auto max-w-4xl px-4 lg:px-6">
        <nav className="text-sm text-muted" aria-label="Brødkrumme"><Link href="/" className="hover:text-green">Hjem</Link> / <Link href="/guides" className="hover:text-green">Guides</Link></nav>
        <header className="mt-6 rounded-[2rem] bg-navy p-7 text-white md:p-12">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-green">Computerguide</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">{guide.title}</h1>
          <p className="mt-5 text-lg leading-relaxed text-white/75">{guide.intro}</p>
        </header>
        <div className="mt-8 space-y-5">
          {guide.sections.map((section) => (
            <section key={section.heading} className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
              <h2 className="text-2xl font-bold text-navy">{section.heading}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph} className="mt-4 leading-relaxed text-muted">{paragraph}</p>)}
              {section.bullets && <ul className="mt-4 space-y-2">{section.bullets.map((bullet) => <li key={bullet} className="flex gap-2 text-muted"><span className="font-bold text-green">✓</span>{bullet}</li>)}</ul>}
            </section>
          ))}
        </div>
        <section className="mt-8 rounded-3xl bg-green/10 p-7 text-center">
          <h2 className="text-2xl font-bold text-navy">Se de relevante computerpakker</h2>
          <Link href={guide.relatedHref} className="mt-5 inline-flex rounded-full bg-navy px-6 py-3 font-bold text-white">{guide.relatedLabel}</Link>
        </section>
      </article>
    </main>
  );
}
