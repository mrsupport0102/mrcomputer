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
    title: "Klargøring",
    description: "Vi opsætter computeren og forbereder dataoverførsel.",
  },
  {
    number: "04",
    title: "Klar til brug",
    description: "Hjemmeinstallation og support — du er i gang med det samme.",
  },
];

export function ProcessSection() {
  return (
    <section className="border-y border-gray-100 bg-surface py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <SectionHeader
          eyebrow="Sådan foregår det"
          title="Fra første samtale til færdig computer"
          description="Vi gør det trygt og enkelt — du bliver holdt i hånden hele vejen."
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
