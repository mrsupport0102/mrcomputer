"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/types";
import { formatPrice } from "@/lib/format-price";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";
import { CheckCircleIcon } from "./icons";

interface ProductGridProps { products: Product[] }

const packagePositioning: Record<string, { audience: string; label: string; highlight?: string }> = {
  budgetpakke: { audience: "Til mail, netbank og hverdagen", label: "God begyndelse" },
  tryghedspakke: { audience: "Til dig der vil have mest tryghed", label: "Bedste samlede pris", highlight: "Skarp pris" },
  komfortpakke: { audience: "Til hverdag, billeder og arbejde", label: "Bedst til de fleste", highlight: "Mest valgt" },
  "apple-macbook-pakke": { audience: "Til dig der foretrækker Apple", label: "Apple-løsningen" },
  premiumpakke: { audience: "Til krævende brug og lang levetid", label: "Mest overskud" },
  gamerpakke: { audience: "Til gaming og høj ydelse", label: "Maksimal kraft" },
};

const serviceValue = [
  { number: "01", title: "Rigtigt valg", text: "Personlig rådgivning før du køber" },
  { number: "02", title: "Klar computer", text: "Opsætning, opdateringer og sikkerhed" },
  { number: "03", title: "Dine ting med", text: "Data flyttet fra den gamle computer" },
  { number: "04", title: "Hjælp bagefter", text: "6 eller 12 måneders personlig tryghed" },
];

function cleanName(name: string) {
  return name.replace("Mest valgt ⭐ ", "").replace("🌟 ", "").replace(" – Klar til brug", "");
}

function PackageCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const position = packagePositioning[product.slug] ?? { audience: product.shortDescription, label: "Komplet løsning" };
  const isFeatured = product.slug === "komfortpakke";
  const price = product.salePrice ?? product.price;

  return (
    <article className={cn("group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl", isFeatured ? "border-green shadow-xl shadow-green/10 ring-1 ring-green/20" : "border-slate-200 shadow-sm")}>
      {position.highlight && <div className={cn("absolute right-4 top-4 z-20 rounded-full px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em]", isFeatured ? "bg-green text-white" : "bg-navy text-white")}>{position.highlight}</div>}
      <Link href={`/produkter/${product.slug}`} className="relative block aspect-[16/10] overflow-hidden bg-gradient-to-br from-slate-50 via-white to-green/5">
        <Image src={product.image} alt={cleanName(product.name)} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-contain p-7 transition duration-500 group-hover:scale-[1.04]" />
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-green">{position.label}</p>
        <Link href={`/produkter/${product.slug}`}><h3 className="mt-2 text-xl font-bold tracking-tight text-navy transition group-hover:text-green">{cleanName(product.name)}</h3></Link>
        <p className="mt-2 min-h-10 text-sm font-medium leading-relaxed text-slate-600">{position.audience}</p>
        <div className="my-5 h-px bg-slate-100" />
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">Du får mere end computeren</p>
        <ul className="mt-3 space-y-2.5">
          {["Klargøring og personlig opsætning", "Dataoverførsel efter behov", `${product.supportMonths} mdr. personlig IT-hjælp`].map((item) => (
            <li key={item} className="flex gap-2.5 text-sm leading-snug text-navy"><CheckCircleIcon className="mt-0.5 h-4 w-4 shrink-0 text-green" />{item}</li>
          ))}
        </ul>
        <div className="mt-auto pt-6">
          <p className="text-xs text-slate-400">Komplet pakkepris</p>
          <div className="mt-1 flex items-baseline gap-2"><span className="text-2xl font-bold tracking-tight text-navy">{formatPrice(price)}</span>{product.salePrice && <span className="text-sm text-slate-400 line-through">{formatPrice(product.price)}</span>}</div>
          <div className="mt-4 grid grid-cols-2 gap-2">
            <Link href={`/produkter/${product.slug}`} className="inline-flex items-center justify-center rounded-full border border-slate-200 px-4 py-2.5 text-sm font-semibold text-navy transition hover:border-navy hover:bg-slate-50">Se pakken</Link>
            <button type="button" onClick={() => addItem(product)} className="rounded-full bg-green px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-green-hover">Læg i kurv</button>
          </div>
        </div>
      </div>
    </article>
  );
}

function ServiceCard({ product }: { product: Product }) {
  return (
    <Link href={`/produkter/${product.slug}`} className="group flex items-center gap-5 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-green/40 hover:shadow-lg sm:p-5">
      <div className="relative h-24 w-28 shrink-0 overflow-hidden rounded-2xl bg-slate-50"><Image src={product.image} alt="" fill sizes="112px" className="object-contain p-3" /></div>
      <div className="min-w-0 flex-1">
        <p className="text-xs font-bold uppercase tracking-wider text-green">{product.category === "ydelser" ? "Personlig service" : "Tilbehør klar til brug"}</p>
        <h3 className="mt-1 font-bold text-navy group-hover:text-green">{product.name}</h3>
        <p className="mt-1 line-clamp-2 text-sm text-muted">{product.shortDescription}</p>
        <p className="mt-2 text-sm font-bold text-navy">Fra {formatPrice(product.salePrice ?? product.price)}</p>
      </div>
      <span className="mr-1 text-xl text-slate-300 transition group-hover:translate-x-1 group-hover:text-green">→</span>
    </Link>
  );
}

export function ProductGrid({ products }: ProductGridProps) {
  const packages = products.filter((product) => product.category === "pakker");
  const services = products.filter((product) => product.category !== "pakker");
  return (
    <section id="pakker" className="scroll-mt-24 border-b border-slate-100 bg-[#f6f8f7] py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div><p className="text-xs font-bold uppercase tracking-[0.2em] text-green">Find din løsning</p><h2 className="mt-3 max-w-xl text-3xl font-bold tracking-tight text-navy md:text-5xl md:leading-[1.08]">Vælg efter dit behov. <span className="text-slate-400">Vi klarer resten.</span></h2></div>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">{serviceValue.map((item) => <div key={item.number} className="rounded-2xl border border-white bg-white/80 p-4 shadow-sm"><span className="text-xs font-bold text-green">{item.number}</span><p className="mt-2 text-sm font-bold text-navy">{item.title}</p><p className="mt-1 text-xs leading-relaxed text-muted">{item.text}</p></div>)}</div>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-navy px-5 py-4 text-white md:px-6"><p className="text-sm font-semibold"><span className="text-green">✓</span> Alle computerpakker leveres opsat og klar til dig</p><a href="tel:+4531364524" className="text-sm font-bold text-green hover:text-white">I tvivl? Ring 31 36 45 24 →</a></div>
        <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">{packages.map((product) => <PackageCard key={product.id} product={product} />)}</div>
        {services.length > 0 && <div className="mt-16"><div className="flex flex-wrap items-end justify-between gap-4"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-green">Også uden computerkøb</p><h2 className="mt-2 text-2xl font-bold tracking-tight text-navy md:text-3xl">Hjælp, tryghed og tilbehør</h2></div><Link href="/butik" className="text-sm font-bold text-navy hover:text-green">Se hele butikken →</Link></div><div className="mt-6 grid gap-4 lg:grid-cols-3">{services.map((product) => <ServiceCard key={product.id} product={product} />)}</div></div>}
      </div>
    </section>
  );
}
