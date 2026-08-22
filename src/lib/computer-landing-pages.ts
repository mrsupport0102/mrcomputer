import type { ComputerLandingConfig } from "@/components/seo/ComputerLandingPage";

export const computerLandingPages = {
  laptop: {
    path: "/baerbar-computer",
    eyebrow: "Bærbar computer",
    title: "Bærbare computere – opsat og klar til brug",
    intro: "Find en bærbar computer til hverdagen, billeder, arbejde eller krævende brug. Vi gør den klar, flytter dine ting og installerer den hjemme hos dig.",
    productSlugs: ["tryghedspakke", "budgetpakke", "komfortpakke", "premiumpakke", "apple-macbook-pakke"],
    sections: [
      { title: "Til almindelig hverdag", text: "Mail, netbank, billeder og dokumenter kræver en driftssikker computer med god skærm og passende lagerplads." },
      { title: "Til arbejde og mange programmer", text: "Vælg mere hukommelse og lagerplads, hvis du arbejder med mange faner, større dokumenter eller kreative programmer." },
      { title: "Klar fra første dag", text: "Opsætning, opdateringer, dataoverførsel og installation i hjemmet er en del af den samlede løsning." },
    ],
    faq: [
      { question: "Hvilken bærbar computer skal jeg vælge?", answer: "Til almindeligt hjemmebrug anbefaler vi typisk 16 GB hukommelse og mindst 512 GB SSD. Dit konkrete behov afgør skærmstørrelse, ydelse og lagerplads." },
      { question: "Kan mine billeder og dokumenter flyttes med?", answer: "Ja. Vi flytter efter aftale dine filer, billeder og dokumenter fra den gamle computer til den nye." },
      { question: "Bliver computeren installeret hjemme hos mig?", answer: "Ja. Den nye computer leveres, opsættes og installeres korrekt hjemme hos dig som en del af computerpakken." },
    ],
  },
  ready: {
    path: "/computer-klar-til-brug",
    eyebrow: "Komplet computerpakke",
    title: "Ny computer klar til brug ved levering",
    intro: "Du får ikke bare en computer i en kasse. Vi klargør den, flytter dine filer og sørger for, at den virker korrekt hjemme hos dig.",
    productSlugs: ["tryghedspakke", "budgetpakke", "komfortpakke", "premiumpakke"],
    sections: [
      { title: "Klargjort på forhånd", text: "Vi sørger for opdateringer, grundlæggende indstillinger og den aftalte personlige tilpasning." },
      { title: "Dine ting flyttes", text: "Filer, billeder og dokumenter flyttes efter behov, så overgangen fra gammel til ny bliver overskuelig." },
      { title: "Installeret i hjemmet", text: "Vi leverer computeren og sikrer, at den er tilsluttet og fungerer korrekt, før vi afslutter." },
    ],
    faq: [
      { question: "Hvad betyder klar til brug?", answer: "Det betyder, at computeren er opdateret, tilpasset efter aftale og installeret hjemme hos dig med de aftalte filer flyttet." },
      { question: "Hvor lang tid tager forløbet?", answer: "Vi afhenter normalt den gamle computer inden for 1–2 hverdage og leverer den nye klar inden for 3–4 hverdage." },
      { question: "Kan jeg vælge en bedre computer?", answer: "Ja. På pakkesiderne kan du vælge mellem flere populære modeller og konfigurationer." },
    ],
  },
  senior: {
    path: "/computer-til-seniorer",
    eyebrow: "En enkel og tryg løsning",
    title: "Computer til seniorer – valgt, opsat og installeret",
    intro: "En god computer til seniorer skal være overskuelig, driftssikker og passe til det reelle behov. Vi tager os af hele overgangen.",
    productSlugs: ["tryghedspakke", "budgetpakke", "komfortpakke"],
    sections: [
      { title: "Let at komme i gang", text: "Vi prioriterer en tydelig skærm, god hastighed og en enkel opsætning uden unødvendige programmer." },
      { title: "Personlig gennemgang", text: "Ved leveringen gennemgår vi den nye computer i et roligt tempo og sikrer, at de vigtigste funktioner er på plads." },
      { title: "Tryghed bagefter", text: "Computerpakkerne indeholder personlig tryghed i 6 eller 12 måneder, afhængigt af den valgte pakke." },
    ],
    faq: [
      { question: "Hvad er en god computer til ældre?", answer: "For de fleste er en stabil bærbar med 16 GB hukommelse, SSD-lager og en tydelig 15–16 tommer skærm et godt udgangspunkt." },
      { question: "Skal jeg selv sætte computeren op?", answer: "Nej. Vi leverer den opsat og installerer den korrekt hjemme hos dig." },
      { question: "Kan indholdet fra min gamle computer bevares?", answer: "Ja. Vi flytter de aftalte filer, billeder og dokumenter til den nye computer." },
    ],
  },
  macbook: {
    path: "/macbook-klar-til-brug",
    eyebrow: "Apple computerpakke",
    title: "MacBook klar til brug med dine filer",
    intro: "Vælg en MacBook Air eller MacBook Pro som komplet pakke. Vi klargør den og sørger for en tryg overgang fra din gamle computer.",
    productSlugs: ["apple-macbook-pakke", "tryghedspakke"],
    sections: [
      { title: "MacBook Air", text: "Et let og lydløst valg til hverdag, billeder, studie og almindeligt arbejde." },
      { title: "MacBook Pro", text: "Til dig der ønsker ekstra ydelse til krævende programmer og en mere avanceret arbejdsgang." },
      { title: "Overgang til Apple", text: "Vi aftaler, hvilke filer og konti der skal med, og gennemgår den nye MacBook ved leveringen." },
    ],
    faq: [
      { question: "Kan filer fra en Windows-computer flyttes til MacBook?", answer: "Ja. Almindelige dokumenter, billeder og andre aftalte filer kan flyttes fra Windows til din nye MacBook." },
      { question: "Hvilken MacBook skal jeg vælge?", answer: "MacBook Air passer til de fleste. MacBook Pro er relevant, hvis du bruger krævende kreative eller professionelle programmer." },
      { question: "Er opsætning inkluderet?", answer: "Ja. MacBook-pakken indeholder klargøring, dataoverførsel efter behov og installation hjemme hos dig." },
    ],
  },
  gaming: {
    path: "/gaming-computer",
    eyebrow: "Gaming computer",
    title: "Gaming-computer med høj ydelse – klar til spil",
    intro: "Vælg en gaming-computer efter de spil, du bruger. Vi samler pakken, opdaterer systemet og leverer den klar til brug.",
    productSlugs: ["gamerpakke", "premiumpakke", "komfortpakke"],
    sections: [
      { title: "Grafikkortet er afgørende", text: "Spiltype, opløsning og ønsket billedhastighed afgør, hvilket grafikkort der passer bedst." },
      { title: "Hukommelse og lager", text: "16 GB hukommelse er et godt udgangspunkt, mens 32 GB giver mere luft til krævende spil og multitasking." },
      { title: "Testet før levering", text: "Systemet opdateres og kontrolleres, så din gaming-computer er klar, når den leveres." },
    ],
    faq: [
      { question: "Hvilket grafikkort skal jeg vælge?", answer: "Det afhænger af dine spil og skærmens opløsning. Vi tager udgangspunkt i de konkrete spil, før du vælger model." },
      { question: "Kan jeg vælge mellem flere gaming-computere?", answer: "Ja. Gamerpakken indeholder flere konfigurationer fra et prisvenligt niveau til kraftige modeller." },
      { question: "Er Windows installeret?", answer: "Ja. Computeren leveres med den aftalte Windows-version, opdateret og klar til brug." },
    ],
  },
} satisfies Record<string, ComputerLandingConfig>;
