import Link from "next/link";
import { Suspense } from "react";
import { Button } from "@/components/ui/Button";
import { ThankYouContent } from "@/components/cart/ThankYouContent";

export const metadata = {
  title: "Tak for din bestilling",
};

export default function ThankYouPage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-2xl px-4 text-center lg:px-6">
        <Suspense fallback={<p className="text-muted">Henter ordrebekræftelse…</p>}>
          <ThankYouContent />
        </Suspense>
        <div className="mt-8">
          <Button href="/butik">Tilbage til butikken</Button>
        </div>
        <p className="mt-6 text-sm text-muted">
          Spørgsmål? Ring{" "}
          <Link href="tel:+4531364524" className="font-semibold text-navy hover:text-green">
            31 36 45 24
          </Link>{" "}
          eller skriv til{" "}
          <Link href="mailto:info@mrcomputer.dk" className="font-semibold text-navy hover:text-green">
            info@mrcomputer.dk
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
