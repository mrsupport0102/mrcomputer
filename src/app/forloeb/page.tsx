import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Forløb",
  description: "Sådan foregår det at købe computer hos MR Computer – fra rådgivning til opsætning.",
};

const steps = [
  {
    step: "1",
    title: "Gratis rådgivning",
    description:
      "Du ringer eller skriver til os. Vi finder sammen den rigtige løsning til dit behov – uden salgspres.",
  },
  {
    step: "2",
    title: "Valg af pakke",
    description:
      "Du vælger den computerpakke der passer til dig. Alle priser inkluderer opsætning og tryghed.",
  },
  {
    step: "3",
    title: "Bestilling",
    description:
      "Du bestiller online eller telefonisk. Vi bekræfter din ordre og klargør din computer.",
  },
  {
    step: "4",
    title: "Hjemmeinstallation",
    description:
      "Vi kommer hjem til dig, opsætter computeren og overfører data fra din gamle maskine.",
  },
  {
    step: "5",
    title: "Tryghed inkluderet",
    description:
      "6 eller 12 måneders personlig tryghed følger med. Du har altid en kontaktperson at ringe til.",
  },
];

export default function ForloebPage() {
  return (
    <div className="bg-[#f6f8f7] py-10 md:py-16">
      <div className="mx-auto max-w-5xl px-4 lg:px-6">
        <h1 className="text-3xl font-bold text-navy">Dit forløb hos MR Computer</h1>
        <p className="mt-4 text-muted">
          Vi gør det trygt og enkelt at få en computer, der bare virker – fra første dag.
        </p>

        <section className="mt-8 overflow-hidden rounded-[2rem] bg-navy text-white shadow-xl shadow-navy/10">
          <div className="grid gap-6 p-6 md:grid-cols-[1.2fr_0.8fr] md:items-center md:p-9">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-green">Fra køb til klar computer</p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">Køb inden kl. 16 — så ringer vi allerede i dag</h2>
              <p className="mt-3 max-w-2xl leading-relaxed text-white/70">
                Gennemfører du købet efter kl. 16, kontakter vi dig næste dag. Vi aftaler hele forløbet personligt, så du ved præcis, hvad der skal ske.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/10 p-5">
              <p className="text-4xl font-bold text-green">3 hverdage</p>
              <p className="mt-2 text-sm leading-relaxed text-white/80">
                Hele opgaven færdiggøres og leveres normalt inden for 3 hverdage, medmindre særlige eller større forhold først skal gennemgås med dig.
              </p>
            </div>
          </div>
        </section>

        <ol className="mt-12 space-y-5 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-9">
          {steps.map((item) => (
            <li key={item.step} className="flex gap-4 border-b border-slate-100 pb-5 last:border-0 last:pb-0 md:gap-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green text-lg font-bold text-white">
                {item.step}
              </span>
              <div>
                <h2 className="text-xl font-bold text-navy">{item.title}</h2>
                <p className="mt-2 text-muted">{item.description}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 text-center sm:flex-row">
          <Button href="/butik">Find din computerpakke</Button>
          <Button href="tel:+4531364524" variant="outline">Ring 31 36 45 24</Button>
        </div>
      </div>
    </div>
  );
}
