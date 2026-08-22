import { SectionHeader } from "@/components/ui/SectionHeader";
import { QuoteIcon } from "./icons";

const testimonials = [
  {
    name: "Moira Olsen",
    text: "Meget hjælpsom og tålmodig. Den nye computer kører fint — ingen problemer. Opsætning og afskaffelse af den gamle computer — meget tilfreds!",
  },
  {
    name: "Michael Jacobsen",
    text: "Verdensklasse service. 24 timer efter var en ny computer klar med alle data overført. Kan kun give mine bedste anbefalinger.",
  },
  {
    name: "Mette Zarp",
    text: "Behagelig og kompetent vejledning ift. min virksomheds IT-behov. Alt er sikret og op at køre igen.",
  },
  {
    name: "Mathias Knudsen",
    text: "De svarede altid med det samme og havde sympati for min situation. Ikke bare en virksomhed der vil tjene penge — de vil faktisk hjælpe.",
  },
];

export function TestimonialsSection() {
  const [featured, ...rest] = testimonials;

  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Kundeudtalelser"
          title="Det siger vores kunder"
          description="Tillid bygges gennem personlig service — læs hvad andre har oplevet hos os."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-12">
          <blockquote className="relative overflow-hidden rounded-3xl bg-navy p-8 text-white lg:col-span-5 lg:p-10">
            <QuoteIcon className="h-10 w-10 text-green/80" />
            <p className="mt-6 text-lg leading-relaxed text-white/90">
              &ldquo;{featured.text}&rdquo;
            </p>
            <footer className="mt-8 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green/20 text-sm font-bold text-green">
                {featured.name.charAt(0)}
              </div>
              <div>
                <cite className="not-italic font-semibold">{featured.name}</cite>
                <p className="text-sm text-white/60">Verificeret kunde</p>
              </div>
            </footer>
            <div className="pointer-events-none absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-green/10 blur-2xl" aria-hidden />
          </blockquote>

          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
            {rest.map((t) => (
              <blockquote
                key={t.name}
                className="flex flex-col rounded-2xl border border-gray-200/80 bg-surface p-6"
              >
                <p className="flex-1 text-sm leading-relaxed text-muted">
                  &ldquo;{t.text}&rdquo;
                </p>
                <footer className="mt-5 border-t border-gray-200/80 pt-4 text-sm font-semibold text-navy">
                  {t.name}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
