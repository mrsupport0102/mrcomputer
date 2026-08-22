import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { CheckCircleIcon } from "./icons";

const promises = ["Rådgivning før køb", "Klar til brug ved levering", "Personlig tryghed bagefter"];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-slate-100 bg-white">
      <div className="hero-glow pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative mx-auto grid max-w-7xl items-center gap-5 px-4 py-6 sm:gap-10 sm:px-6 sm:py-12 md:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-8 lg:py-20">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-green/20 bg-green/5 px-3 py-1.5">
            <span className="h-2 w-2 rounded-full bg-green" />
            <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-navy/70">Computer + personlig service i én pakke</span>
          </div>
          <h1 className="mt-4 text-[2.25rem] font-bold leading-[1.02] tracking-[-0.045em] text-navy sm:mt-5 sm:text-5xl lg:text-[4.1rem]">
            Ikke bare en ny computer.
            <span className="mt-2 block text-green">En tryg start.</span>
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted sm:mt-5 sm:text-base md:text-lg">
            Vi finder den rigtige computer, flytter dine ting og gør den helt klar. Du får én fast kontaktperson og tryghed, når teknikken driller.
          </p>
          <div className="mt-6 hidden flex-wrap gap-x-5 gap-y-2 sm:flex">
            {promises.map((promise) => <span key={promise} className="flex items-center gap-2 text-sm font-medium text-navy"><CheckCircleIcon className="h-4 w-4 text-green" />{promise}</span>)}
          </div>
          <div className="mt-5 grid grid-cols-2 gap-2 sm:mt-8 sm:flex sm:flex-row sm:gap-3">
            <Button href="#pakker" className="px-3 py-3 text-sm shadow-lg shadow-green/20 sm:px-7 sm:py-3.5 sm:text-base">Se pakkerne</Button>
            <Button href="tel:+4531364524" variant="outline" className="px-3 py-3 text-sm sm:px-7 sm:py-3.5 sm:text-base">Ring til os</Button>
          </div>
          <div className="mt-7 hidden flex-wrap items-center gap-4 border-t border-slate-100 pt-5 sm:flex">
            <Image src="/trustpilot.png" alt="Trustpilot" width={140} height={18} className="h-[18px] w-auto" priority />
            <span className="text-xs text-muted">20+ års erfaring · Levering i hele Danmark</span>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-[590px] pb-7 sm:pb-10 sm:pt-3">
          <div className="absolute -inset-5 rounded-[3rem] bg-green/10 blur-3xl" aria-hidden />
          <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-100 shadow-xl shadow-navy/15 sm:aspect-[4/3] sm:rounded-[2.25rem] sm:shadow-2xl">
            <Image src="/hero-tryghed-mathias-slim.png" alt="Mathias skaber tryghed i rolige og hjemlige omgivelser" fill sizes="(max-width: 1024px) 94vw, 590px" className="scale-105 object-cover opacity-70 blur-[1px]" priority />
            <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/5 to-white/80" aria-hidden />
            <div className="absolute inset-x-[11%] bottom-4 top-[20%] z-10">
              <Image src="/products/tryghedspakke.png" alt="Ny computer fra MR Computer" fill sizes="(max-width: 1024px) 78vw, 460px" className="object-contain drop-shadow-[0_26px_30px_rgba(11,17,32,0.34)]" priority />
            </div>
            <div className="absolute left-3 top-3 z-20 rounded-full border border-white/70 bg-white/90 px-3 py-1.5 shadow-lg backdrop-blur sm:left-5 sm:top-5 sm:px-4 sm:py-2">
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-green">Komplet computerpakke</p>
            </div>
          </div>
          <div className="absolute bottom-0 left-3 right-3 z-20 flex items-center gap-2 rounded-xl border border-white/70 bg-white/95 p-2.5 shadow-xl backdrop-blur sm:left-6 sm:right-auto sm:min-w-[350px] sm:gap-3 sm:rounded-2xl sm:p-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green/10 text-base text-green sm:h-10 sm:w-10 sm:text-xl">✓</span>
            <div><p className="text-[10px] font-bold uppercase tracking-[0.16em] text-green">Mere end computeren</p><p className="mt-1 text-sm font-bold text-navy">Opsætning · Dataflytning · Tryghed</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}
