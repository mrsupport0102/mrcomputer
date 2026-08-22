import { SectionHeader } from "@/components/ui/SectionHeader";

const steps = [
  {
    number: "01",
    title: "Gratis rådgivning",
    description: "Vi finder sammen den rigtige løsning — uden salgspres.",
  },
  {
    number: "02",
    title: "Valg af pakke",
    description: "Du vælger den pakke der passer til dit behov og budget.",
  },
  {
    number: "03",
    title: "Afhentning inden for 1–2 hverdage",
    description: "Vi afhenter din gamle computer hjemme hos dig og tager den sikkert med til klargøring.",
  },
  {
    number: "04",
    title: "Leveret klar inden for 3–4 hverdage",
    description: "Vi flytter dine filer, billeder og dokumenter og leverer den nye computer, opsat og installeret korrekt hjemme hos dig.",
  },
];

export function ProcessSection() {
  return (
    <section className="border-y border-gray-100 bg-surface py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Sådan foregår det"
          title="Fra første samtale til færdig computer"
          description="Vi henter din gamle computer, flytter dit indhold og installerer den nye korrekt hjemme hos dig."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {index < steps.length - 1 && (
                <div
                  className="absolute left-[calc(50%+2rem)] top-8 hidden h-px w-[calc(100%-4rem)] bg-gradient-to-r from-green/40 to-transparent lg:block"
                  aria-hidden
                />
              )}
              <div className="flex h-full flex-col rounded-2xl border border-gray-200/80 bg-white p-6 shadow-sm">
                <span className="text-sm font-bold text-green">{step.number}</span>
                <h3 className="mt-3 text-lg font-bold text-navy">{step.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
