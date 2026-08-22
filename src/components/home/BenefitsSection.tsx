import { SectionHeader } from "@/components/ui/SectionHeader";
import { CheckCircleIcon, ShieldIcon, ClockIcon, HeartIcon } from "./icons";

const benefits = [
  "Levering i hele Danmark",
  "Dansk tryghed inkluderet",
  "Hurtig fjernhjælp inkluderet",
  "Klar til brug fra første sekund",
  "Samme kontaktperson hver gang",
  "6 eller 12 måneders tryghedsaftale",
];

const pillars = [
  {
    icon: ShieldIcon,
    title: "Du er i sikkerhed",
    description:
      "Vi sørger for din sikkerhed hele vejen — med opsætning af din egen sikkerhed eller vores anbefalinger.",
  },
  {
    icon: ClockIcon,
    title: "Ingen ventetid",
    description:
      "Vi afhenter gammelt udstyr og leverer hurtigt. Ny computer med dataoverførsel — ofte samme uge.",
  },
  {
    icon: HeartIcon,
    title: "Personligt",
    description:
      "Vi møder dig der hvor du er. Ingen teknisk jargon — vi holder dig i hånden hele vejen.",
  },
];

export function BenefitsSection() {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Hvorfor MR Computer"
          title="Mere end bare en computer"
          description="Du køber ikke kun hardware — du får en komplet løsning med opsætning, fjernhjælp og tryghed."
        />

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <div
              key={benefit}
              className="flex items-center gap-3 rounded-2xl border border-gray-100 bg-surface px-4 py-3.5"
            >
              <CheckCircleIcon className="h-5 w-5 shrink-0 text-green" />
              <span className="text-sm font-medium text-navy">{benefit}</span>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {pillars.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="rounded-3xl border border-gray-200/80 bg-gradient-to-b from-white to-surface p-7 shadow-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green/10 text-green">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-navy">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted md:text-[15px]">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
