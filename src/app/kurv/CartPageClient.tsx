"use client";

import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/format-price";
import { Button } from "@/components/ui/Button";
import { ButtonNative } from "@/components/ui/Button";
import { CheckoutButton } from "@/components/cart/CheckoutButton";

export function CartPageClient() {
  const searchParams = useSearchParams();
  const cancelled = searchParams.get("annulleret") === "1";
  const { items, removeItem, updateQuantity, totalPrice, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-3xl font-bold text-navy">Din kurv er tom</h1>
        <p className="mt-4 text-muted">Tilføj produkter fra butikken for at fortsætte.</p>
        <div className="mt-8">
          <Button href="/butik">Gå til butik</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#f6f8f7] py-12 md:py-16">
      <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-navy">Indkøbskurv</h1>

        {cancelled && (
          <p className="mt-4 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
            Betalingen blev annulleret. Din kurv er stadig gemt — du kan prøve igen.
          </p>
        )}

        <ul className="mt-8 space-y-4">
          {items.map(({ product, quantity }) => {
            const price = product.salePrice ?? product.price;
            return (
              <li key={product.id} className="grid items-center gap-4 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm sm:grid-cols-[112px_minmax(0,1fr)_auto] sm:gap-6 sm:p-5">
                <Link href={`/produkter/${product.slug}`} className="relative h-24 w-28 overflow-hidden rounded-2xl border border-slate-100 bg-gradient-to-br from-slate-50 to-white">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="112px"
                    className={product.category === "pakker" ? "object-contain p-2" : "object-cover"}
                  />
                </Link>
                <div className="min-w-0">
                  <Link
                    href={`/produkter/${product.slug}`}
                    className="text-lg font-bold text-navy hover:text-green"
                  >
                    {product.name}
                  </Link>
                  <p className="mt-1 text-sm text-muted">{formatPrice(price)} pr. stk.</p>
                  {product.supportMonths > 0 && (
                    <p className="mt-2 text-xs font-semibold uppercase tracking-[0.1em] text-green">
                      {product.supportMonths} mdr. tryghed inkluderet
                    </p>
                  )}
                </div>
                <div className="flex items-center justify-between gap-4 border-t border-slate-100 pt-4 sm:justify-end sm:border-0 sm:pt-0">
                  <div className="flex items-center gap-2 rounded-full border border-slate-200 p-1">
                    <button
                      type="button"
                      onClick={() => updateQuantity(product.id, quantity - 1)}
                      className="flex h-9 w-9 items-center justify-center rounded-full text-lg text-navy transition hover:bg-slate-100"
                      aria-label="Reducer antal"
                    >
                      −
                    </button>
                    <span className="w-7 text-center font-semibold text-navy">{quantity}</span>
                    <button
                      type="button"
                      onClick={() => updateQuantity(product.id, quantity + 1)}
                      className="flex h-9 w-9 items-center justify-center rounded-full text-lg text-navy transition hover:bg-slate-100"
                      aria-label="Forøg antal"
                    >
                      +
                    </button>
                  </div>
                  <div className="min-w-28 text-right">
                    <p className="font-bold text-navy">{formatPrice(price * quantity)}</p>
                    <button
                      type="button"
                      onClick={() => removeItem(product.id)}
                      className="mt-1 text-xs font-medium text-slate-400 hover:text-red-500"
                    >
                      Fjern vare
                    </button>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="mt-6 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
          <div className="flex justify-between text-lg font-bold text-navy">
            <span>Total</span>
            <span>{formatPrice(totalPrice)}</span>
          </div>
          <p className="mt-2 text-sm text-muted">
            Sikker betaling med kort og Apple Pay via QuickPay. Vi kontakter dig efter købet
            for at aftale levering og opsætning.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <CheckoutButton />
            <Button href="tel:+4531364524" variant="outline" className="px-6 py-3">
              Ring 31 36 45 24
            </Button>
            <ButtonNative variant="outline" onClick={clearCart}>
              Tøm kurv
            </ButtonNative>
          </div>
        </div>
      </div>
    </div>
  );
}
