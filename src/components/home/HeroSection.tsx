import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { CheckCircleIcon } from "./icons";

const promises = ["Rådgivning før køb", "Klar til brug ved levering", "Personlig tryghed bagefter"];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-slate-100 bg-white">
      <div className="hero-glow pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-12 sm:px-6 md:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-8 lg:py-20">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-green/20 bg-green/5 px-3 py-1.5">
            <span className="h-2 w-2 rounded-full bg-green" />
            <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-navy/70">Computer + personlig service i én pakke</span>
          </div>
          <h1 className="mt-5 text-[2.5rem] font-bold leading-[1.02] tracking-[-0.045em] text-navy sm:text-5xl lg:text-[4.1rem]">
            Ikke bare en ny computer.
            <span className="mt-2 block text-green">En tryg start.</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            Vi finder den rigtige computer, flytter dine ting og gør den helt klar. Du får én fast kontaktperson og tryghed, når teknikken driller.
          </p>
          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
            {promises.map((promise) => <span key={promise} className="flex items-center gap-2 text-sm font-medium text-navy"><CheckCircleIcon className="h-4 w-4 text-green" />{promise}</span>)}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#pakker" className="px-7 py-3.5 text-base shadow-lg shadow-green/20">Find din computerpakke</Button>
            <Button href="tel:+4531364524" variant="outline" className="px-7 py-3.5 text-base">Få gratis rådgivning</Button>
          </div>
          <div className="mt-7 flex flex-wrap items-center gap-4 border-t border-slate-100 pt-5">
            <Image src="/trustpilot.png" alt="Trustpilot" width={140} height={18} className="h-[18px] w-auto" priority />
            <span className="text-xs text-muted">20+ års erfaring · Levering i hele Danmark</span>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-[560px]">
          <div className="absolute inset-x-10 bottom-4 h-20 rounded-full bg-green/20 blur-3xl" aria-hidden />
          <div className="relative aspect-[5/4]"><Image src="/products/tryghedspakke.png" alt="Tryghedspakken fra MR Computer, klar til brug" fill sizes="(max-width: 1024px) 90vw, 520px" className="object-contain p-4 drop-shadow-[0_28px_45px_rgba(11,17,32,0.18)]" priority /></div>
          <div className="absolute bottom-3 left-0 rounded-2xl border border-slate-200 bg-white/95 p-4 shadow-xl backdrop-blur sm:left-4"><p className="text-[10px] font-bold uppercase tracking-[0.16em] text-green">Med i pakken</p><p className="mt-1 text-sm font-bold text-navy">Opsætning · Dataflytning · Tryghed</p></div>
        </div>
      </div>
    </section>
  );
}
