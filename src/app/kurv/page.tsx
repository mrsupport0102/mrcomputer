import { Suspense } from "react";
import { CartPageClient } from "./CartPageClient";

export default function CartPage() {
  return (
    <Suspense fallback={<div className="py-20 text-center text-muted">Indlæser kurv…</div>}>
      <CartPageClient />
    </Suspense>
  );
}
