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
      "Du vælger den computerpakke der passer til dig. Alle priser inkluderer opsætning og support.",
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
    title: "Support inkluderet",
    description:
      "6 eller 12 måneders personlig IT-support følger med. Du har altid en kontaktperson at ringe til.",
  },
];

export default function ForloebPage() {
  return (
    <div className="py-12">
      <div className="mx-auto max-w-3xl px-4 lg:px-6">
        <h1 className="text-3xl font-bold text-navy">Dit forløb hos MR Computer</h1>
        <p className="mt-4 text-muted">
          Vi gør det trygt og enkelt at få en computer, der bare virker – fra første dag.
        </p>

        <ol className="mt-12 space-y-8">
          {steps.map((item) => (
            <li key={item.step} className="flex gap-6">
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

        <div className="mt-12 text-center">
          <Button href="tel:+4531364524">Start med en gratis samtale</Button>
        </div>
      </div>
    </div>
  );
}
