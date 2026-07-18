import { Product } from "@/lib/types";

const defaultIncluded = [
  "Fuldt opsat og installeret hjemme hos dig",
  "Dataoverførsel fra gammel computer (efter behov)",
  "Gratis rådgivning før køb",
];

export const products: Product[] = [
  {
    id: "1",
    slug: "apple-macbook-pakke",
    name: "Apple-MacBook Pakke",
    shortDescription: "MacBook Air 13 M4 – klar til brug med personlig support.",
    description:
      "Den perfekte løsning til de fleste. Hurtig, driftssikker og skræddersyet til dine behov – med fuld opsætning, dataoverførsel og personlig support.",
    price: 13995,
    category: "pakker",
    featured: true,
    specs: [
      "M4 (10-Core CPU & 8-Core GPU)",
      "16GB RAM, 256GB SSD",
      '13,6″ Liquid Retina med True Tone',
      "Wifi 6E + BT 5.3, Midnight",
    ],
    included: defaultIncluded,
    supportMonths: 12,
    image: "/products/apple-macbook-pakke.png",
  },
  {
    id: "2",
    slug: "budgetpakke",
    name: "Budgetpakke",
    shortDescription: "Lenovo IdeaPad Slim 3 – ideel til let hverdagsbrug.",
    description:
      "Helt normal hverdagscomputer til let brug – god til dig, som ikke bruger computer hver dag eller til mere end det mest nødvendige.",
    price: 8995,
    category: "pakker",
    featured: true,
    specs: [
      "Lenovo IdeaPad Slim 3 – 15.6″",
      "Intel Core Ultra 5, 4GB RAM, 128GB",
      "Windows 11 Home",
    ],
    included: defaultIncluded,
    supportMonths: 6,
    image: "/products/budgetpakke.png",
  },
  {
    id: "3",
    slug: "komfortpakke",
    name: "Mest valgt ⭐ Komfortpakke",
    shortDescription: "Lenovo LoQ 15 – kraftfuld og stabil til hverdag og arbejde.",
    description:
      "God kraftfuld og meget stabil computer til normal- og arbejdsbrug. Den perfekte løsning til de fleste.",
    price: 15000,
    salePrice: 12995,
    category: "pakker",
    badge: "Mest valgt",
    featured: true,
    specs: [
      "GeForce RTX 3050 6GB, AMD Ryzen 7 7735HS",
      "16GB RAM, 512GB SSD, Windows 11 Home",
      "15.6″ IPS Full HD 144Hz, Wifi 6 + BT5.2",
    ],
    included: defaultIncluded,
    supportMonths: 12,
    image: "/products/komfortpakke.png",
  },
  {
    id: "4",
    slug: "premiumpakke",
    name: "Premiumpakke",
    shortDescription: "Lenovo Yoga Slim 7 OLED – premium oplevelse til krævende brug.",
    description:
      "Premium computer til dig der vil have det bedste. Fuldt opsat med dataoverførsel og 12 måneders support.",
    price: 15995,
    category: "pakker",
    featured: true,
    specs: [
      "Lenovo Yoga Slim 7 15.3″ OLED",
      "Core Ultra 7, 32GB RAM, 1TB SSD",
      "Windows 11 Home",
    ],
    included: defaultIncluded,
    supportMonths: 12,
    image: "/products/premiumpakke.webp",
  },
  {
    id: "5",
    slug: "tryghedspakke",
    name: "🌟 Tryghedspakke – Klar til brug",
    shortDescription: "Komplet pakke med computer, opsætning og tryghedsaftale.",
    description:
      "Alt-i-én løsning med computer, fuld opsætning, dataoverførsel og 12 måneders personlig support.",
    price: 14000,
    salePrice: 11995,
    category: "pakker",
    badge: "Tilbud",
    featured: true,
    specs: [
      "Skræddersyet computer efter behov",
      "Fuld opsætning og hjemmeinstallation",
      "12 måneders fjernstyringssupport",
    ],
    included: defaultIncluded,
    supportMonths: 12,
    image: "/products/tryghedspakke.png",
  },
  {
    id: "6",
    slug: "gamerpakke",
    name: "Gamerpakke",
    shortDescription: "Kraftfuld gaming-computer – klar til spil fra dag ét.",
    description:
      "Designet til gamere der vil have performance uden besvær. Opsat, testet og klar med support inkluderet.",
    price: 16995,
    category: "pakker",
    specs: [
      "Højtydende gaming-konfiguration",
      "Dedikeret grafikkort og hurtig SSD",
      "Windows 11 Home, fuldt opsat",
    ],
    included: defaultIncluded,
    supportMonths: 12,
    image: "/products/gamerpakke.png",
  },
  {
    id: "7",
    slug: "printerpakke",
    name: "Printerpakke",
    shortDescription: "Printer inkl. opsætning og tilslutning til din computer.",
    description:
      "Printer leveret og sat op hos dig – klar til brug med din computer.",
    price: 4300,
    salePrice: 3995,
    category: "tilbehor",
    badge: "Tilbud",
    specs: ["Multifunktionsprinter", "Wifi-opsætning inkluderet", "Hjemmeinstallation"],
    included: ["Opsætning og tilslutning", "Grundig gennemgang af funktioner"],
    supportMonths: 6,
    image: "/products/printerpakke.png",
  },
  {
    id: "8",
    slug: "tryghedsaftale-12mdr",
    name: "12 mdr. Tryghedsaftale (uden computer)",
    shortDescription: "Forlænget personlig IT-support uden computerkøb.",
    description:
      "12 måneders adgang til teknisk rådgivning, fjernsupport og assistance ved almindelige IT-problemer.",
    price: 4995,
    category: "ydelser",
    specs: [
      "Teknisk rådgivning",
      "Fjernsupport",
      "Assistance ved almindelige IT-problemer",
    ],
    included: ["Personlig kontaktperson", "Support efter aftale inden for arbejdstid"],
    supportMonths: 12,
    image: "/products/tryghedsaftale.png",
  },
  {
    id: "9",
    slug: "hjemmebesog",
    name: "Hjemmebesøg, inden for 3 hverdage",
    shortDescription: "Personligt besøg hos dig inden for 3 hverdage.",
    description:
      "Vi kommer hjem til dig og løser dine IT-udfordringer på stedet – hurtigt og personligt.",
    price: 1495,
    category: "ydelser",
    specs: ["Besøg inden for 3 hverdage", "Fejlfinding og opsætning", "Personlig vejledning"],
    included: ["Kørsel i Nordsjælland og København", "Op til 2 timers assistance"],
    supportMonths: 0,
    image: "/products/hjemmebesog.png",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}
