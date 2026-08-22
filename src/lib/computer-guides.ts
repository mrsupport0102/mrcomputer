export type ComputerGuide = {
  slug: string;
  title: string;
  description: string;
  intro: string;
  sections: { heading: string; paragraphs: string[]; bullets?: string[] }[];
  relatedHref: string;
  relatedLabel: string;
};

export const computerGuides: ComputerGuide[] = [
  {
    slug: "hvilken-baerbar-computer-skal-jeg-vaelge",
    title: "Hvilken bærbar computer skal jeg vælge?",
    description: "En enkel guide til at vælge bærbar computer efter behov, skærmstørrelse, hukommelse og lagerplads.",
    intro: "Den bedste bærbare computer er ikke nødvendigvis den dyreste. Det vigtigste er, at størrelse, hastighed og lagerplads passer til din hverdag.",
    sections: [
      { heading: "Start med det du bruger computeren til", paragraphs: ["Mail, netbank, billeder og almindelige dokumenter kræver ikke en avanceret gaming-computer. Arbejde med mange programmer, store regneark eller billedbehandling kræver derimod mere hukommelse og ydelse."], bullets: ["Almindelig hverdag: 16 GB hukommelse og 512 GB SSD", "Arbejde og mange programmer: 16–32 GB hukommelse", "Krævende grafik og spil: dedikeret grafikkort og ekstra køling"] },
      { heading: "Vælg en behagelig skærmstørrelse", paragraphs: ["En 14-tommer computer er let at tage med. En 15–16-tommer skærm giver større tekst og bedre plads, hvilket ofte er det mest behagelige valg i hjemmet."] },
      { heading: "Se på hele løsningen", paragraphs: ["En lav produktpris fortæller ikke, om computeren bliver klargjort, om dine filer flyttes, eller om den bliver installeret korrekt. Sammenlign derfor den samlede løsning og ikke kun hardwaren."] },
    ],
    relatedHref: "/baerbar-computer",
    relatedLabel: "Se bærbare computere",
  },
  {
    slug: "hvor-meget-ram-har-jeg-brug-for",
    title: "Hvor meget RAM har jeg brug for?",
    description: "Læs forskellen på 8, 16 og 32 GB RAM, og vælg den rigtige hukommelse til din nye computer.",
    intro: "RAM er computerens arbejdshukommelse. Mere RAM gør det lettere at have flere programmer og browserfaner åbne samtidig.",
    sections: [
      { heading: "8 GB er kun til let brug", paragraphs: ["8 GB kan fungere til meget enkel brug, men giver mindre plads til fremtidige opdateringer og flere samtidige programmer."] },
      { heading: "16 GB passer til de fleste", paragraphs: ["Til netbank, mail, dokumenter, billeder, streaming og almindeligt arbejde er 16 GB det mest fornuftige udgangspunkt i en ny computer."] },
      { heading: "32 GB til krævende arbejde", paragraphs: ["32 GB er relevant til større billedsamlinger, videoredigering, tunge arbejdsprogrammer, avancerede regneark eller krævende gaming."] },
    ],
    relatedHref: "/computer-klar-til-brug",
    relatedLabel: "Se computere klar til brug",
  },
  {
    slug: "computer-til-mail-netbank-og-billeder",
    title: "Computer til mail, netbank og billeder",
    description: "Sådan vælger du en enkel og driftssikker computer til mail, netbank, billeder og almindelig hverdagsbrug.",
    intro: "Til almindelig hverdagsbrug er stabilitet, en tydelig skærm og en enkel opsætning vigtigere end avancerede specifikationer.",
    sections: [
      { heading: "Det vigtigste i en hverdagscomputer", paragraphs: ["Vælg en moderne processor, 16 GB hukommelse og mindst 512 GB SSD. Det giver hurtig opstart, god plads og en computer, der føles behagelig i flere år."] },
      { heading: "Skærm og tastatur betyder meget", paragraphs: ["Hvis computeren hovedsageligt bruges hjemme, er en 15–16-tommer skærm ofte mere behagelig. Kontrollér også, at tastaturet har dansk layout."] },
      { heading: "Få dine billeder med over", paragraphs: ["Aftal på forhånd hvilke mapper, billeder og dokumenter der skal flyttes. Hos MR Computer kan dataoverførsel og installation i hjemmet indgå i den samlede computerpakke."] },
    ],
    relatedHref: "/computer-til-seniorer",
    relatedLabel: "Se enkle computerpakker",
  },
  {
    slug: "flyt-filer-til-ny-computer",
    title: "Sådan får du dine filer med til en ny computer",
    description: "Få overblik over flytning af billeder, dokumenter og andre filer fra din gamle computer til den nye.",
    intro: "Et computerskifte handler ikke kun om den nye maskine. Dine billeder, dokumenter og personlige mapper skal også med på en sikker og overskuelig måde.",
    sections: [
      { heading: "Skab overblik først", paragraphs: ["Gennemgå de vigtigste mapper på den gamle computer: Dokumenter, Billeder, Skrivebord og eventuelle særlige arkiver. Det reducerer risikoen for, at noget bliver overset."] },
      { heading: "Kontrollér før den gamle computer afsluttes", paragraphs: ["Åbn et udvalg af filer på den nye computer, kontrollér mappernes indhold og bevar den gamle computer urørt, indtil overførslen er bekræftet."] },
      { heading: "MR Computers forløb", paragraphs: ["Vi afhenter normalt den gamle computer inden for 1–2 hverdage. Den nye leveres typisk inden for 3–4 hverdage med de aftalte filer flyttet og computeren installeret hjemme hos dig."] },
    ],
    relatedHref: "/forloeb",
    relatedLabel: "Se hele forløbet",
  },
  {
    slug: "windows-eller-macbook",
    title: "Windows-computer eller MacBook?",
    description: "Sammenlign Windows-computer og MacBook, og find den løsning der passer til dine programmer og din hverdag.",
    intro: "Begge systemer kan være gode valg. Den rigtige løsning afhænger især af dine nuværende programmer, andre enheder og den måde, du arbejder på.",
    sections: [
      { heading: "Vælg Windows for fleksibilitet", paragraphs: ["Windows giver et stort udvalg af modeller, skærmstørrelser og prisniveauer. Det er ofte det letteste valg, hvis du allerede bruger Windows-programmer."] },
      { heading: "Vælg MacBook for Apple-sammenhæng", paragraphs: ["MacBook passer godt, hvis du allerede bruger iPhone eller iPad og ønsker et let, lydløst design med lang batteritid."] },
      { heading: "Kontrollér programmer og filer", paragraphs: ["Før et skifte bør du kontrollere, at dine vigtigste programmer findes til det nye system. Almindelige billeder og dokumenter kan som regel flyttes mellem Windows og Mac."] },
    ],
    relatedHref: "/macbook-klar-til-brug",
    relatedLabel: "Se MacBook-pakker",
  },
];

export function getComputerGuide(slug: string) {
  return computerGuides.find((guide) => guide.slug === slug);
}
