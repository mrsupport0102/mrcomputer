"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/types";
import { formatPrice } from "@/lib/format-price";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";
import { CheckCircleIcon } from "./icons";
import { getProductVariants, getStartingPrice } from "@/lib/product-variants";

interface ProductGridProps { products: Product[] }

const packagePositioning: Record<string, { audience: string; label: string; highlight?: string }> = {
  budgetpakke: { audience: "Til mail, netbank og hverdagen", label: "God begyndelse" },
  tryghedspakke: { audience: "Til dig der vil have mest tryghed", label: "Bedste samlede pris", highlight: "Mest valgt" },
  komfortpakke: { audience: "Til hverdag, billeder og arbejde", label: "Bedst til de fleste" },
  "apple-macbook-pakke": { audience: "Til dig der foretrækker Apple", label: "Apple-løsningen" },
  premiumpakke: { audience: "Til krævende brug og lang levetid", label: "Mest overskud" },
  gamerpakke: { audience: "Til gaming og høj ydelse", label: "Maksimal kraft" },
};

const serviceValue = [
  { number: "01", title: "Rigtigt valg", text: "Personlig rådgivning før du køber" },
  { number: "02", title: "Klar computer", text: "Opsætning, opdateringer og sikkerhed" },
  { number: "03", title: "Dine ting med", text: "Data flyttet fra den gamle computer" },
  { number: "04", title: "Tryghed bagefter", text: "6 eller 12 måneders personlig tryghed" },
];

function cleanName(name: string) {
  return name.replace("Mest valgt ⭐ ", "").replace("🌟 ", "").replace(" – Klar til brug", "");
}

function PackageCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const position = packagePositioning[product.slug] ?? { audience: product.shortDescription, label: "Komplet løsning" };
  const isFeatured = product.slug === "tryghedspakke";
  const variants = getProductVariants(product);
  const price = getStartingPrice(product);

  return (
    <article className={cn("group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl", isFeatured ? "border-green shadow-xl shadow-green/10 ring-1 ring-green/20" : "border-slate-200 shadow-sm")}>
      {position.highlight && <div className={cn("absolute right-2 top-2 z-20 rounded-full px-2 py-1 text-[8px] font-bold uppercase tracking-[0.08em] sm:right-4 sm:top-4 sm:px-3 sm:py-1.5 sm:text-[11px] sm:tracking-[0.12em]", isFeatured ? "bg-green text-white" : "bg-navy text-white")}>{position.highlight}</div>}
      <Link href={`/produkter/${product.slug}`} className="relative block h-28 overflow-hidden border-b border-slate-100 bg-gradient-to-br from-slate-50 via-white to-green/5 sm:h-56">
        <Image src={product.image} alt={cleanName(product.name)} fill sizes="(max-width: 640px) 50vw, (max-width: 1200px) 50vw, 33vw" className="object-contain p-2.5 transition duration-500 group-hover:scale-[1.04] sm:p-7" />
      </Link>
      <div className="flex flex-1 flex-col p-3 sm:grid sm:grid-rows-[auto_3.5rem_2.75rem_auto_1fr_auto] sm:p-6">
        <p className="text-[9px] font-bold uppercase tracking-[0.1em] text-green sm:text-[11px] sm:tracking-[0.16em]">{position.label}</p>
        <Link href={`/produkter/${product.slug}`} className="flex items-start"><h3 className="mt-1 text-[15px] font-bold leading-tight tracking-tight text-navy transition group-hover:text-green sm:mt-2 sm:text-xl">{cleanName(product.name)}</h3></Link>
        <p className="mt-1 hidden text-sm font-medium leading-relaxed text-slate-600 sm:block">{position.audience}</p>
        <div className="my-4 hidden h-px bg-slate-100 sm:block" />
        <p className="hidden text-xs font-bold uppercase tracking-[0.14em] text-slate-400 sm:block">Du får mere end computeren</p>
        <ul className="mt-3 hidden space-y-2.5 sm:block">
          {["Klargøring og personlig opsætning", "Dataoverførsel efter behov", `${product.supportMonths} mdr. personlig tryghed`].map((item) => (
            <li key={item} className="flex gap-2.5 text-sm leading-snug text-navy"><CheckCircleIcon className="mt-0.5 h-4 w-4 shrink-0 text-green" />{item}</li>
          ))}
        </ul>
        <div className="mt-auto pt-3 sm:pt-6">
          <p className="mb-2 text-[10px] font-semibold leading-tight text-green sm:mb-3 sm:text-xs">
            Køb inden kl. 16 — bliv ringet op i dag
          </p>
          <p className="hidden text-xs text-slate-400 sm:block">Komplet pakkepris fra</p>
          <div className="flex flex-col sm:mt-1 sm:flex-row sm:items-baseline sm:gap-2"><span className="text-base font-bold tracking-tight text-navy sm:text-2xl">Fra {formatPrice(price)}</span></div>
          <div className="mt-2 sm:mt-4 sm:grid sm:grid-cols-2 sm:gap-2">
            <Link href={`/produkter/${product.slug}`} className="hidden min-h-11 items-center justify-center rounded-full border border-slate-200 px-4 py-2.5 text-sm font-semibold text-navy transition hover:border-navy hover:bg-slate-50 sm:inline-flex">Se pakken</Link>
            {variants.length ? <Link href={`/produkter/${product.slug}`} className="inline-flex min-h-9 w-full items-center justify-center rounded-full bg-green px-2 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-green-hover sm:min-h-11 sm:px-4 sm:py-2.5 sm:text-sm">Vælg computer</Link> : <button type="button" onClick={() => addItem(product)} className="min-h-9 w-full rounded-full bg-green px-2 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-green-hover sm:min-h-11 sm:px-4 sm:py-2.5 sm:text-sm">Læg i kurv</button>}
          </div>
        </div>
      </div>
    </article>
  );
}

function ServiceCard({ product }: { product: Product }) {
  return (
    <Link href={`/produkter/${product.slug}`} className="group flex items-center gap-5 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-green/40 hover:shadow-lg sm:p-5">
      <div className="relative h-24 w-28 shrink-0 overflow-hidden rounded-2xl border border-slate-100 bg-[#f4f1ed]"><Image src={product.image} alt="" fill sizes="112px" className="scale-110 object-cover" /></div>
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
  const packageOrder = ["tryghedspakke", "budgetpakke", "komfortpakke", "apple-macbook-pakke", "premiumpakke", "gamerpakke"];
  const packages = products
    .filter((product) => product.category === "pakker")
    .sort((a, b) => packageOrder.indexOf(a.slug) - packageOrder.indexOf(b.slug));
  const services = products.filter((product) => product.category !== "pakker");
  return (
    <section id="pakker" className="scroll-mt-20 border-b border-slate-100 bg-[#f6f8f7] py-8 sm:scroll-mt-24 sm:py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div><p className="text-[10px] font-bold uppercase tracking-[0.2em] text-green sm:text-xs">Find din løsning</p><h2 className="mt-2 max-w-xl text-2xl font-bold tracking-tight text-navy sm:mt-3 sm:text-3xl md:text-5xl md:leading-[1.08]">Vælg efter dit behov. <span className="text-slate-400">Vi klarer resten.</span></h2></div>
          <div className="hidden grid-cols-2 gap-3 sm:grid sm:grid-cols-4">{serviceValue.map((item) => <div key={item.number} className="flex min-h-36 flex-col rounded-2xl border border-white bg-white/90 p-4 shadow-sm"><span className="text-xs font-bold text-green">{item.number}</span><p className="mt-auto pt-4 text-sm font-bold text-navy">{item.title}</p><p className="mt-1 text-xs leading-relaxed text-muted">{item.text}</p></div>)}</div>
        </div>
        <div className="mt-4 flex flex-wrap items-center justify-between gap-2 rounded-xl bg-navy px-3 py-3 text-white sm:mt-10 sm:gap-3 sm:rounded-2xl sm:px-5 sm:py-4 md:px-6"><p className="text-xs font-semibold sm:text-sm"><span className="text-green">✓</span> Leveres opsat og klar til dig</p><a href="tel:+4531364524" className="hidden text-sm font-bold text-green hover:text-white sm:block">I tvivl? Ring 31 36 45 24 →</a></div>
        <div className="mt-3 grid grid-cols-2 gap-2.5 sm:mt-6 sm:gap-5 md:grid-cols-2 xl:grid-cols-3">{packages.map((product) => <PackageCard key={product.id} product={product} />)}</div>
        {services.length > 0 && <div className="mt-16"><div className="flex flex-wrap items-end justify-between gap-4"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-green">Også uden computerkøb</p><h2 className="mt-2 text-2xl font-bold tracking-tight text-navy md:text-3xl">Tryghed, fjernhjælp og tilbehør</h2></div><Link href="/butik" className="text-sm font-bold text-navy hover:text-green">Se hele butikken →</Link></div><div className="mt-6 grid gap-4 lg:grid-cols-3">{services.map((product) => <ServiceCard key={product.id} product={product} />)}</div></div>}
      </div>
    </section>
  );
}
