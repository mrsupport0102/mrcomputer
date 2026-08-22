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
        <div className="relative mx-auto w-full max-w-[590px] pb-10 pt-3">
          <div className="absolute -inset-5 rounded-[3rem] bg-green/10 blur-3xl" aria-hidden />
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2.25rem] border border-slate-200 bg-slate-100 shadow-2xl shadow-navy/15">
            <Image src="/hero-tryghed-mathias.png" alt="Mathias skaber tryghed i rolige og hjemlige omgivelser" fill sizes="(max-width: 1024px) 94vw, 590px" className="scale-105 object-cover opacity-70 blur-[1px]" priority />
            <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/5 to-white/80" aria-hidden />
            <div className="absolute inset-x-[11%] bottom-4 top-[20%] z-10">
              <Image src="/products/tryghedspakke.png" alt="Ny computer fra MR Computer" fill sizes="(max-width: 1024px) 78vw, 460px" className="object-contain drop-shadow-[0_26px_30px_rgba(11,17,32,0.34)]" priority />
            </div>
            <div className="absolute left-5 top-5 z-20 rounded-full border border-white/70 bg-white/90 px-4 py-2 shadow-lg backdrop-blur">
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-green">Komplet computerpakke</p>
            </div>
          </div>
          <div className="absolute bottom-0 left-4 right-4 z-20 flex items-center gap-3 rounded-2xl border border-white/70 bg-white/95 p-4 shadow-xl backdrop-blur sm:left-6 sm:right-auto sm:min-w-[350px]">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green/10 text-xl text-green">✓</span>
            <div><p className="text-[10px] font-bold uppercase tracking-[0.16em] text-green">Mere end computeren</p><p className="mt-1 text-sm font-bold text-navy">Opsætning · Dataflytning · Tryghed</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}
