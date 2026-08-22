import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Handelsbetingelser",
  alternates: { canonical: "/handelsbetingelser" },
};

export default function LegalPage() {
  return (
    <div className="py-12">
      <div className="mx-auto max-w-3xl px-4 lg:px-6">
        <h1 className="text-3xl font-bold text-navy">Juridisk information</h1>

        <nav className="mt-6 flex flex-wrap gap-4 text-sm">
          <a href="#handelsbetingelser" className="text-green hover:underline">Handelsbetingelser</a>
          <a href="#privatlivspolitik" className="text-green hover:underline">Privatlivspolitik</a>
          <a href="#cookiepolitik" className="text-green hover:underline">Cookiepolitik</a>
          <a href="#fortrydelse" className="text-green hover:underline">Fortrydelse</a>
        </nav>

        <section id="handelsbetingelser" className="mt-12 scroll-mt-24">
          <h2 className="text-2xl font-bold text-navy">Handelsbetingelser</h2>
          <div className="prose prose-sm mt-4 max-w-none text-muted">
            <p><strong>MR Computer · CVR 40198237.</strong></p>
            <p>CVR: 40198237 · Lyngbakken 5, 3400 Hillerød</p>
            <p>E-mail: info@mrcomputer.dk · Telefon: 31 36 45 24</p>
            <p>Alle priser er angivet i danske kroner (DKK) inkl. moms.</p>
            <p>Ved køb af en computerpakke kontakter vi dig for at aftale forløbet. Når dataflytning fra en gammel computer indgår, afhenter vi den normalt inden for 1–2 hverdage. Den nye computer leveres og installeres normalt i hjemmet inden for 3–4 hverdage med aftalt indhold flyttet. Særlige eller større forhold kan forlænge forløbet og aftales i så fald med dig.</p>
            <p>Ved køb af computer kan der være inkluderet 6 eller 12 måneders tryghedsaftale.</p>
            <p>24 måneders reklamationsret på hardware i henhold til dansk lovgivning.</p>
            <p>14 dages fortrydelsesret ved køb online.</p>
          </div>
        </section>

        <section id="privatlivspolitik" className="mt-12 scroll-mt-24">
          <h2 className="text-2xl font-bold text-navy">Privatlivspolitik</h2>
          <div className="prose prose-sm mt-4 max-w-none text-muted">
            <p>MR Computer er dataansvarlig for behandling af personoplysninger.</p>
            <p>Vi indsamler navn, adresse, telefon, e-mail og ordreoplysninger for at gennemføre dit køb.</p>
            <p>Oplysninger opbevares i op til 5 år i henhold til bogføringsloven.</p>
            <p>Du har ret til indsigt, rettelse, sletning og dataportabilitet jf. GDPR.</p>
          </div>
        </section>

        <section id="cookiepolitik" className="mt-12 scroll-mt-24">
          <h2 className="text-2xl font-bold text-navy">Cookiepolitik</h2>
          <div className="prose prose-sm mt-4 max-w-none text-muted">
            <p>Vi anvender nødvendige cookies og lokal lagring til indkøbskurv og stabil drift.</p>
            <p>
              Med dit samtykke anvender vi desuden Google Ads-cookies til at måle, om vores
              annoncer fører til køb. Du kan afvise disse cookies uden at miste adgang til webshoppen.
            </p>
          </div>
        </section>

        <section id="fortrydelse" className="mt-12 scroll-mt-24">
          <h2 className="text-2xl font-bold text-navy">Fortrydelsesformular</h2>
          <div className="prose prose-sm mt-4 max-w-none text-muted">
            <p>Du har 14 dages fortrydelsesret. Send en e-mail til info@mrcomputer.dk med dit navn, adresse, ordrenummer og hvilken vare købet vedrører.</p>
          </div>
        </section>

        <p className="mt-12 text-sm text-muted">
          Fuld juridisk tekst findes på{" "}
          <a
            href="https://www.mrcomputer.dk/handelsbetingelser/"
            className="text-green hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            den eksisterende hjemmeside
          </a>
          . Denne side er en forkortet version til den nye webshop.
        </p>
      </div>
    </div>
  );
}
