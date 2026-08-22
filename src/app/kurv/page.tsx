import { Suspense } from "react";
import { CartPageClient } from "./CartPageClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Indkøbskurv",
  robots: { index: false, follow: false },
};

export default function CartPage() {
  return (
    <Suspense fallback={<div className="py-20 text-center text-muted">Indlæser kurv…</div>}>
      <CartPageClient />
    </Suspense>
  );
}
