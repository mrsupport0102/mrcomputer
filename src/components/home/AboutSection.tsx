import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";

const stats = [
  { value: "20+", label: "års erfaring med IT-support" },
  { value: "1.000+", label: "tilfredse kunder" },
  { value: "2.000+", label: "løste opgaver" },
];

export function AboutSection() {
  return (
    <section className="bg-surface py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeader
              align="left"
              eyebrow="Om MR Computer"
              title="En computer der bare virker — fra dag ét"
              description="Vi startede med én klar ambition: at gøre det trygt og enkelt at få en computer, der virker. Med mere end 20 års erfaring hjælper vi dagligt ældre, private, virksomheder og gamere."
            />
            <p className="mt-6 text-base leading-relaxed text-muted">
              Vores fundament udspringer af MR Support, hvor vi hver dag møder
              mennesker med vidt forskellige behov. Derfor tilbyder vi
              skræddersyede pakker med opsætning, dataoverførsel og personlig
              tilpasning.
            </p>
            <div className="mt-8">
              <Button href="/forloeb" variant="secondary">
                Se hele forløbet
              </Button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl border border-gray-200/80 bg-white p-6 text-center shadow-sm lg:text-left xl:text-center"
              >
                <p className="text-3xl font-bold tracking-tight text-green md:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm leading-snug text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
