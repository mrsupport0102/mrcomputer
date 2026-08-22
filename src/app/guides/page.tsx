import type { Metadata } from "next";
import Link from "next/link";
import { computerGuides } from "@/lib/computer-guides";

export const metadata: Metadata = {
  title: "Guides til valg af ny computer",
  description: "Læs enkle guides om bærbare computere, RAM, dataoverførsel, Windows og MacBook.",
  alternates: { canonical: "/guides" },
};

export default function GuidesPage() {
  return (
    <main className="bg-[#f6f8f7] py-10 md:py-16">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-green">Viden før dit køb</p>
        <h1 className="mt-2 text-4xl font-bold text-navy">Guides til din nye computer</h1>
        <p className="mt-4 max-w-3xl leading-relaxed text-muted">Få et enkelt overblik over de vigtigste valg, før du køber computer.</p>
        <div className="mt-9 grid gap-5 md:grid-cols-2">
          {computerGuides.map((guide) => (
            <article key={guide.slug} className="rounded-3xl border border-slate-200 bg-white p-6">
              <h2 className="text-xl font-bold text-navy"><Link href={`/guides/${guide.slug}`} className="hover:text-green">{guide.title}</Link></h2>
              <p className="mt-3 leading-relaxed text-muted">{guide.description}</p>
              <Link href={`/guides/${guide.slug}`} className="mt-5 inline-flex font-bold text-green">Læs guiden →</Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
