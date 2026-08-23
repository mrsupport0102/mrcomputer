import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";
import { absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Tryghedsaftale til computer – personlig tryghed",
  description:
    "Få personlig tryghed til din computer med en fast kontaktperson hos MR Computer. 6 eller 12 måneder følger med vores computerpakker – uden automatisk fornyelse.",
  alternates: { canonical: "/tryghedsaftale" },
  openGraph: {
    title: "Tryghedsaftale til computer | MR Computer",
    description:
      "En fast kontaktperson, rolige forklaringer og personlig tryghed, når noget på computeren skaber tvivl.",
    url: absoluteUrl("/tryghedsaftale"),
    images: [
      {
        url: absoluteUrl("/hero-tryghed-mathias-slim.png"),
        width: 1200,
        height: 630,
        alt: "Mathias fra MR Computer – din faste kontaktperson",
      },
    ],
  },
};

const included = [
  "En fast og personlig kontakt hos MR Computer",
  "Rolig vejledning, når computeren skaber tvivl",
  "Sikker fjernforbindelse efter aftale, når det giver mening",
  "Tryghed ved almindelige udfordringer på computeren",
  "6 eller 12 måneders tryghed – afhængigt af din pakke",
  "Ingen automatisk fornyelse eller skjult binding",
];

const situations = [
  {
    title: "Noget ser anderledes ud",
    text: "En besked, en opdatering eller en indstilling virker pludselig ukendt. Du får en rolig forklaring og ved, hvad næste skridt er.",
  },
  {
    title: "Du vil være helt sikker",
    text: "Er du i tvivl om, hvad du skal trykke på, kan du spørge først. Det giver ro, før en lille usikkerhed vokser sig stor.",
  },
  {
    title: "Du skal videre uden uro",
    text: "Når computeren står i vejen for billeder, post eller hverdagsopgaver, hjælper vi dig trygt videre efter aftale.",
  },
];

const steps = [
  {
    number: "01",
    title: "Du kontakter Mathias",
    text: "Du skal ikke forklare dig med svære fagord. Fortæl blot, hvad du oplever.",
  },
  {
    number: "02",
    title: "I aftaler den bedste vej",
    text: "Du får en rolig vurdering af, om det kan klares over telefonen eller via en sikker fjernforbindelse.",
  },
  {
    number: "03",
    title: "Du kommer trygt videre",
    text: "Vi afslutter først, når du ved, hvad der er sket, og hvad du selv skal gøre bagefter.",
  },
];

const boundaries = [
  "Hardwarefejl uden for producentens garanti",
  "Licenser og betaling til programmer fra andre leverandører",
  "Skader efter virus, hacking eller misbrug",
  "Problemer i internetudstyr, som computeren ikke styrer",
  "Større installationer eller længere undervisningsforløb",
];

const faqs = [
  {
    question: "Hvad er en tryghedsaftale til computer?",
    answer:
      "En tryghedsaftale giver dig en fast kontaktperson hos MR Computer, som du kan kontakte, når noget på computeren skaber tvivl. Du får en rolig vurdering og personlig tryghed efter aftale inden for arbejdstid.",
  },
  {
    question: "Følger tryghedsaftalen med en ny computer?",
    answer:
      "Ja. Alle vores computerpakker indeholder enten 6 eller 12 måneders personlig tryghed. Den præcise periode fremgår tydeligt af den enkelte pakke.",
  },
  {
    question: "Kan jeg købe en tryghedsaftale uden en computer?",
    answer:
      "Ja. Du kan købe 12 måneders personlig tryghed separat, også selv om din nuværende computer ikke er købt hos MR Computer.",
  },
  {
    question: "Hvordan foregår en sikker fjernforbindelse?",
    answer:
      "Hvis I aftaler en fjernforbindelse, giver du selv midlertidig adgang via en sikker forbindelse. Du kan følge med på skærmen hele tiden, og forbindelsen afsluttes igen bagefter.",
  },
  {
    question: "Er tryghedsaftalen et abonnement?",
    answer:
      "Nej. Aftalen fornyes ikke automatisk, og du bliver ikke bundet til en ny periode. Når perioden nærmer sig sin afslutning, vælger du selv, om du ønsker en ny aftale.",
  },
  {
    question: "Hvornår kan jeg kontakte MR Computer?",
    answer:
      "Du kan kontakte os inden for vores normale arbejdstid. Personlig tryghed og eventuel fjernforbindelse foregår efter aftale, så der er afsat ro og tid til dig.",
  },
  {
    question: "Hvad er ikke omfattet af aftalen?",
    answer:
      "Aftalen omfatter ikke blandt andet hardwarefejl uden for garantien, tredjepartslicenser, skader efter virus eller hacking samt større installationer og længere undervisningsforløb. Du får altid en tydelig vurdering, før andet arbejde aftales.",
  },
];

export default function TryghedsaftalePage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Personlig tryghedsaftale til computer",
    description:
      "12 måneders personlig tryghed til computer med fast kontaktperson hos MR Computer.",
    url: absoluteUrl("/tryghedsaftale"),
    image: absoluteUrl("/hero-tryghed-mathias-slim.png"),
    areaServed: { "@type": "Country", name: "Danmark" },
    provider: { "@id": absoluteUrl("/#organization") },
    offers: {
      "@type": "Offer",
      price: "4995",
      priceCurrency: "DKK",
      availability: "https://schema.org/InStock",
      url: absoluteUrl("/produkter/tryghedsaftale-12mdr"),
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <main className="overflow-hidden bg-white">
      <JsonLd data={[serviceJsonLd, faqJsonLd]} />

      <section className="relative bg-[linear-gradient(135deg,#f4fbf4_0%,#ffffff_48%,#eef7ff_100%)] py-10 sm:py-16 lg:py-20">
        <div className="pointer-events-none absolute -left-32 top-12 h-72 w-72 rounded-full bg-green/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-cyan-200/30 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.02fr_.98fr] lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-green">
              Personlig tryghed til din computer
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight text-navy sm:text-5xl lg:text-6xl">
              Du skal aldrig føle dig alene med din computer.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
              Med en tryghedsaftale får du Mathias som fast kontaktperson. En, du
              kender, og som forklarer tingene roligt, når noget på computeren skaber
              tvivl.
            </p>

            <div className="mt-7 grid max-w-xl gap-3 sm:grid-cols-2">
              {["Fast kontaktperson", "Ingen automatisk fornyelse", "Rolige forklaringer", "Sikker fjernforbindelse efter aftale"].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm font-semibold text-navy">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-green text-xs text-white">✓</span>
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="/produkter/tryghedsaftale-12mdr">Se 12 måneders tryghed</Button>
              <Button href="tel:+4531364524" variant="outline">Ring 31 36 45 24</Button>
            </div>
            <p className="mt-4 text-sm text-muted">
              6 eller 12 måneder er allerede inkluderet i vores computerpakker.
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-2xl">
            <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem] border border-white/80 bg-white shadow-[0_28px_80px_rgba(15,23,42,.16)]">
              <Image
                src="/hero-tryghed-mathias-slim.png"
                alt="Mathias fra MR Computer, din faste kontaktperson"
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/70 bg-white/90 p-4 shadow-lg backdrop-blur sm:inset-x-auto sm:left-6 sm:min-w-72">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-green">Din kontaktperson</p>
                <p className="mt-1 text-xl font-bold text-navy">Mathias fra MR Computer</p>
                <p className="mt-1 text-sm text-muted">Samme menneske. Rolig kontakt. Klare svar.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green">Ro i hverdagen</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Tryghed er at vide, hvem du kan kontakte
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted">
              Det behøver ikke være alvorligt, før det er rart at have et kendt menneske at spørge.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {situations.map((item, index) => (
              <article key={item.title} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_12px_36px_rgba(15,23,42,.07)]">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-green/10 text-lg font-bold text-green">{index + 1}</span>
                <h3 className="mt-6 text-xl font-bold text-navy">{item.title}</h3>
                <p className="mt-3 leading-7 text-muted">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-16 text-white sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[.8fr_1.2fr] lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green">Det får du</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Personlig tryghed med klare rammer</h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
              Du ved på forhånd, hvad aftalen indeholder, hvem du taler med, og at der ikke kommer en automatisk forlængelse bagefter.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {included.map((item) => (
              <div key={item} className="flex gap-3 rounded-2xl border border-white/10 bg-white/[.06] p-5">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-green text-sm font-bold">✓</span>
                <p className="font-semibold leading-6">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-slate-100 shadow-xl">
            <Image
              src="/hero-tryghed-senior.png"
              alt="Tryg computerhverdag med personlig kontakt hos MR Computer"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green">Sådan foregår det</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">En enkel vej fra tvivl til ro</h2>
            <div className="mt-8 space-y-7">
              {steps.map((step) => (
                <div key={step.number} className="grid grid-cols-[3rem_1fr] gap-4">
                  <span className="text-sm font-bold tracking-wider text-green">{step.number}</span>
                  <div>
                    <h3 className="text-xl font-bold text-navy">{step.title}</h3>
                    <p className="mt-2 leading-7 text-muted">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green">Vælg din løsning</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">Tryghed med eller uden ny computer</h2>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <article className="rounded-3xl border-2 border-green bg-white p-7 shadow-lg sm:p-9">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-green">Mest værdi</p>
              <h3 className="mt-3 text-2xl font-bold text-navy">En komplet computerpakke</h3>
              <p className="mt-4 leading-7 text-muted">
                Vælg en færdig computerpakke, og få 6 eller 12 måneders personlig tryghed inkluderet sammen med klargøring, flytning af dine filer og opsætning hjemme hos dig.
              </p>
              <div className="mt-7"><Button href="/butik">Se alle computerpakker</Button></div>
            </article>
            <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-green">Til din nuværende computer</p>
              <h3 className="mt-3 text-2xl font-bold text-navy">12 måneders tryghed</h3>
              <p className="mt-4 leading-7 text-muted">Få den faste kontakt og personlige tryghed, selv om du allerede har en computer, du er glad for.</p>
              <p className="mt-6 text-3xl font-bold text-navy">4.995 kr.</p>
              <div className="mt-7"><Button href="/produkter/tryghedsaftale-12mdr" variant="outline">Se aftalen</Button></div>
            </article>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-amber-200 bg-amber-50 p-7 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr]">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-700">Ærlig tryghed</p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy">Du ved også, hvad der ligger udenfor aftalen</h2>
                <p className="mt-4 leading-7 text-muted">Hvis noget kræver en anden løsning, får du altid en tydelig vurdering, før andet aftales.</p>
              </div>
              <ul className="space-y-3">
                {boundaries.map((item) => (
                  <li key={item} className="flex gap-3 rounded-xl bg-white/70 p-4 text-sm font-medium text-navy">
                    <span className="text-amber-700">•</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green">Ofte stillede spørgsmål</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">Svar om tryghedsaftalen</h2>
            <p className="mt-4 text-lg text-muted">Her finder du de vigtigste svar, før du vælger personlig tryghed til din computer.</p>
          </div>
          <div className="mt-10 space-y-3">
            {faqs.map((faq) => (
              <details key={faq.question} className="group rounded-2xl border border-slate-200 bg-white px-6 py-5 shadow-sm">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-bold text-navy">
                  {faq.question}
                  <span className="text-2xl font-light text-green transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 max-w-3xl border-t border-slate-100 pt-4 leading-7 text-muted">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-16 text-white sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-green">Er du i tvivl?</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Tag en rolig samtale med Mathias</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">Fortæl, hvad du ønsker mere tryghed omkring. Så finder I sammen ud af, om aftalen passer til dig.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="tel:+4531364524">Ring 31 36 45 24</Button>
            <Link href="/kontakt" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/30 px-7 font-bold text-white transition hover:bg-white/10">Skriv til MR Computer</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
