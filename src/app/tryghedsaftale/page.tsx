import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Tryghedsaftale",
  description: "6 eller 12 måneders personlig tryghed inkluderet i alle computerpakker.",
};

const included = [
  "Teknisk rådgivning",
  "Fjernhjælp",
  "Assistance ved almindelige IT-problemer",
  "Personlig kontaktperson",
  "Personlig tryghed efter aftale inden for arbejdstid",
];

const notIncluded = [
  "Hardwarefejl uden for garantien",
  "Tredjepartssoftware",
  "Virus eller hacking",
  "Netværksproblemer uden for computerens kontrol",
  "Omfattende undervisning eller opsætninger",
];

export default function TryghedsaftalePage() {
  return (
    <div className="py-12">
      <div className="mx-auto max-w-3xl px-4 lg:px-6">
        <h1 className="text-3xl font-bold text-navy">Tryghedsaftale</h1>
        <p className="mt-4 text-muted">
          Alle vores computerpakker inkluderer 6 eller 12 måneders personlig tryghed
          leveret af MR Computer. Det er ikke et abonnement – det fornyes ikke automatisk.
        </p>

        <div className="mt-10 rounded-2xl bg-green/10 p-6">
          <h2 className="text-lg font-bold text-navy">Hvad er inkluderet?</h2>
          <ul className="mt-4 space-y-2">
            {included.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-navy">
                <span className="text-green">✔</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 rounded-2xl border border-gray-200 p-6">
          <h2 className="text-lg font-bold text-navy">Hvad dækker tryghedsaftalen ikke?</h2>
          <ul className="mt-4 space-y-2">
            {notIncluded.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-muted">
                <span>•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-8 text-sm text-muted">
          Du kan også købe en 12 måneders tryghedsaftale uden computer i vores butik.
        </p>

        <div className="mt-8">
          <Button href="/butik">Se produkter</Button>
        </div>
      </div>
    </div>
  );
}
