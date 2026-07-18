import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { CheckCircleIcon } from "./icons";

const heroPoints = [
  "Opsætning inkluderet",
  "Dataoverførsel inkluderet",
  "Gratis rådgivning før køb",
];

const packageIncludes = [
  "Hjemmeinstallation",
  "Dataoverførsel",
  "Personlig IT-hjælp",
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-gray-100 bg-white lg:min-h-0">
      <div className="hero-glow pointer-events-none absolute inset-0" aria-hidden />

      <div className="relative mx-auto flex min-h-[calc(100svh-4.25rem)] max-w-6xl flex-col px-4 py-5 sm:min-h-0 sm:py-10 lg:px-6 lg:py-16">
        <div className="grid flex-1 items-center gap-5 sm:gap-8 lg:grid-cols-[1fr_0.9fr] lg:gap-14">
          <div className="flex min-h-0 flex-col lg:max-w-xl">
            <div className="flex items-start gap-3 sm:gap-4 lg:block">
              <div className="min-w-0 flex-1">
                <div className="hidden items-center gap-2 rounded-full border border-green/20 bg-green/5 px-3 py-1.5 sm:inline-flex">
                  <span className="h-1.5 w-1.5 rounded-full bg-green" />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-navy/70">
                    Opsætning · Dataoverførsel · Personlig hjælp
                  </span>
                </div>

                <h1 className="text-[1.65rem] font-bold leading-[1.1] tracking-tight text-navy sm:mt-5 sm:text-5xl">
                  Ny computer.
                  <span className="block text-navy/90">Klar til brug.</span>
                  <span className="mt-0.5 block bg-gradient-to-r from-green to-emerald-600 bg-clip-text text-transparent sm:mt-1">
                    Tryghed inkluderet.
                  </span>
                </h1>
              </div>

              <div className="relative h-32 w-32 shrink-0 sm:h-36 sm:w-36 lg:hidden">
                <Image
                  src="/hero-laptop.png"
                  alt=""
                  fill
                  sizes="128px"
                  className="object-contain drop-shadow-[0_16px_32px_rgba(11,17,32,0.16)]"
                  priority
                />
              </div>
            </div>

            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted sm:mt-5 sm:text-base md:text-lg">
              Vi leverer skræddersyede computerpakker med opsætning,
              dataoverførsel og dansk IT-hjælp — så du er klar fra første
              sekund.
            </p>

            <ul className="mt-3 space-y-1.5 sm:mt-6 sm:space-y-2.5">
              {heroPoints.map((item) => (
                <li key={item} className="flex items-center gap-2 text-[13px] text-navy sm:gap-2.5 sm:text-sm md:text-base">
                  <CheckCircleIcon className="h-4 w-4 shrink-0 text-green sm:h-5 sm:w-5" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-5 hidden border-l-2 border-green pl-4 sm:mt-7 lg:block">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-green">
                Inkluderet i alle pakker
              </p>
              <p className="mt-1 text-base font-bold text-navy md:text-lg">
                6 eller 12 måneders tryghed
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {packageIncludes.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-surface px-3 py-1.5 text-xs font-medium text-navy"
                  >
                    <span className="text-green">✓</span>
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-auto pt-5 sm:mt-8 sm:pt-0">
              <div className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
                <Button
                  href="/butik"
                  className="w-full px-6 py-3 shadow-md shadow-green/20 sm:w-auto"
                >
                  Se computerpakker
                </Button>
                <Button
                  href="tel:+4531364524"
                  variant="outline"
                  className="hidden px-6 py-3 sm:inline-flex"
                >
                  Ring 31 36 45 24
                </Button>
              </div>

              <div className="mt-5 hidden items-center gap-4 border-t border-gray-200/80 pt-5 sm:flex lg:mt-7 lg:pt-6">
                <Image
                  src="/trustpilot.png"
                  alt="Trustpilot"
                  width={140}
                  height={18}
                  className="h-[18px] w-auto opacity-90"
                  style={{ width: "auto", height: "18px" }}
                />
                <span className="hidden h-4 w-px bg-gray-200 md:block" />
                <p className="text-xs text-muted md:text-sm">
                  Personlig rådgivning · Levering i hele Danmark
                </p>
              </div>
            </div>
          </div>

          <div className="relative hidden items-center justify-center lg:flex lg:justify-end">
            <div className="relative aspect-square w-full max-w-[440px] lg:max-w-[480px]">
              <Image
                src="/hero-laptop.png"
                alt="Moderne laptop klar til brug"
                fill
                sizes="480px"
                className="object-contain drop-shadow-[0_24px_48px_rgba(11,17,32,0.18)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
