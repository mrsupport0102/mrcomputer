import Link from "next/link";
import { Logo } from "./Logo";

const legalLinks = [
  { href: "/handelsbetingelser#handelsbetingelser", label: "Handelsbetingelser" },
  { href: "/handelsbetingelser#privatlivspolitik", label: "Privatlivspolitik" },
  { href: "/handelsbetingelser#cookiepolitik", label: "Cookiepolitik" },
  { href: "/handelsbetingelser#fortrydelse", label: "Fortrydelsesformular" },
];

export function Footer() {
  return (
    <footer className="mt-auto bg-navy text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-2 lg:px-6">
        <div>
          <Logo />
          <h2 className="mt-6 text-xs font-semibold uppercase tracking-wider text-white/60">
            Om os
          </h2>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-white/80">
            Hos MR Computer gør vi det anderledes. Vi rådgiver dig allerede inden købet,
            så du får den rigtige løsning fra start. Herefter hjælper vi med opsætning
            og installation i hjemmet, og med en efterfølgende tryghedsaftale sikrer vi,
            at du aldrig står alene med dine IT-udfordringer.
          </p>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-wider text-white/60">
            Kontakt
          </h2>
          <ul className="mt-3 space-y-2 text-sm text-white/80">
            <li>
              <a href="tel:+4531364524" className="hover:text-green">
                31 36 45 24
              </a>
            </li>
            <li>
              <a href="mailto:info@mrcomputer.dk" className="hover:text-green">
                info@mrcomputer.dk
              </a>
            </li>
            <li>Lyngbakken 5, 3400 Hillerød</li>
          </ul>

          <nav className="mt-8 flex flex-col gap-2" aria-label="Juridiske links">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs font-semibold uppercase tracking-wide text-white/70 hover:text-green"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs text-white/50">
        <p>
          © {new Date().getFullYear()} MR Computer / MR Support · CVR 40198237
        </p>
        <Link href="/admin/login" className="mt-2 inline-block text-white/35 hover:text-white/60">
          Admin
        </Link>
      </div>
    </footer>
  );
}
