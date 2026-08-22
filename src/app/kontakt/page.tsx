import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Kontakt MR Computer – ring, skriv eller besøg os i Hillerød.",
};

export default function KontaktPage() {
  return (
    <div className="py-12">
      <div className="mx-auto max-w-3xl px-4 lg:px-6">
        <h1 className="text-3xl font-bold text-navy">Kontakt os</h1>
        <p className="mt-4 text-muted">
          Ring og få svar på dine spørgsmål, ganske gratis. Vi rådgiver dig inden købet.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h2 className="font-bold text-navy">Telefon</h2>
            <a
              href="tel:+4531364524"
              className="mt-2 block text-2xl font-bold text-green hover:underline"
            >
              31 36 45 24
            </a>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h2 className="font-bold text-navy">E-mail</h2>
            <a
              href="mailto:info@mrcomputer.dk"
              className="mt-2 block text-green hover:underline"
            >
              info@mrcomputer.dk
            </a>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:col-span-2">
            <h2 className="font-bold text-navy">Adresse</h2>
            <p className="mt-2 text-muted">
              MR Computer
              <br />
              Lyngbakken 5
              <br />
              3400 Hillerød
            </p>
            <p className="mt-2 text-sm text-muted">CVR: 40198237</p>
          </div>
        </div>

        <div className="mt-10">
          <Button href="tel:+4531364524">Ring nu</Button>
        </div>
      </div>
    </div>
  );
}
