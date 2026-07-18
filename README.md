# MR Computer Webshop

Modern Next.js webshop for [MR Computer](https://www.mrcomputer.dk) — bygget fra bunden med lokale produktdata, responsivt design og klar til Netlify-deploy.

## Tech stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- Lokale produktdata i `src/data/products.ts`
- Kurv via localStorage (klar til checkout senere)
- Produktfeed-API på `/api/products`

## Kom i gang

```bash
npm install
cp .env.example .env.local
npm run dev
```

Åbn [http://localhost:3000](http://localhost:3000).

## Scripts

| Kommando        | Beskrivelse              |
|-----------------|--------------------------|
| `npm run dev`   | Lokal udviklingsserver   |
| `npm run build` | Production build         |
| `npm run start` | Kør production build     |
| `npm run lint`  | ESLint                   |

## Projektstruktur

```
src/
├── app/              # Sider og API-routes
├── components/       # UI- og layout-komponenter
├── context/          # Kurv (CartContext)
├── data/             # Produkter (lokal JSON/TS)
└── lib/              # Typer, utils, formatering
```

## Sider

- `/` — Forside
- `/butik` — Produktkatalog med filtrering
- `/produkter/[slug]` — Produktdetalje
- `/kurv` — Indkøbskurv
- `/forloeb`, `/tryghedsaftale`, `/kontakt` — Info-sider
- `/handelsbetingelser` — Juridisk information
- `/api/products` — JSON produktfeed (til fremtidig integration)

## Deploy til Netlify

1. Push projektet til GitHub
2. Opret nyt site på [Netlify](https://app.netlify.com)
3. Forbind GitHub-repo
4. Netlify læser `netlify.toml` automatisk
5. Sæt miljøvariabel: `NEXT_PUBLIC_SITE_URL=https://dit-domæne.dk`

## Fremtidige udvidelser

- Checkout (QuickPay)
- Produktfeed fra ekstern kilde
- CMS til indhold
- Trustpilot API-integration

## Kontakt

MR Computer / MR Support  
Lyngbakken 5, 3400 Hillerød  
Telefon: 31 36 45 24 · info@mrcomputer.dk
