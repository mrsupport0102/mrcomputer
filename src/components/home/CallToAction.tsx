import { Button } from "@/components/ui/Button";

export function CallToAction() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 md:py-24">
      <div className="cta-glow pointer-events-none absolute inset-0" aria-hidden />

      <div className="relative mx-auto max-w-3xl px-4 text-center lg:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green">
          Gratis rådgivning
        </p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
          Bliv en del af familien i dag
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
          Ring og få svar på dine spørgsmål — helt gratis og uforpligtende.
          Vi hjælper dig med at finde den rigtige løsning.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button href="tel:+4531364524" variant="primary" className="px-8 py-3.5 text-base shadow-lg shadow-green/25">
            Ring 31 36 45 24
          </Button>
          <Button href="/butik" variant="ghost-light" className="px-8 py-3.5 text-base">
            Se computerpakker
          </Button>
        </div>

        <p className="mt-6 text-sm text-white/50">
          MR Computer · Lyngbakken 5, 3400 Hillerød
        </p>
      </div>
    </section>
  );
}
