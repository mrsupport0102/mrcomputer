"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/format-price";
import { Button } from "@/components/ui/Button";
import { ButtonNative } from "@/components/ui/Button";

export default function CartPage() {
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
    <div className="py-12">
      <div className="mx-auto max-w-3xl px-4 lg:px-6">
        <h1 className="text-3xl font-bold text-navy">Indkøbskurv</h1>

        <ul className="mt-8 divide-y divide-gray-200">
          {items.map(({ product, quantity }) => {
            const price = product.salePrice ?? product.price;
            return (
              <li key={product.id} className="flex flex-wrap items-center gap-4 py-6">
                <div className="flex-1">
                  <Link
                    href={`/produkter/${product.slug}`}
                    className="font-semibold text-navy hover:text-green"
                  >
                    {product.name}
                  </Link>
                  <p className="text-sm text-muted">{formatPrice(price)} stk.</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => updateQuantity(product.id, quantity - 1)}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50"
                    aria-label="Reducer antal"
                  >
                    −
                  </button>
                  <span className="w-8 text-center">{quantity}</span>
                  <button
                    type="button"
                    onClick={() => updateQuantity(product.id, quantity + 1)}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50"
                    aria-label="Forøg antal"
                  >
                    +
                  </button>
                </div>
                <p className="w-24 text-right font-semibold text-navy">
                  {formatPrice(price * quantity)}
                </p>
                <button
                  type="button"
                  onClick={() => removeItem(product.id)}
                  className="text-sm text-red-500 hover:underline"
                >
                  Fjern
                </button>
              </li>
            );
          })}
        </ul>

        <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6">
          <div className="flex justify-between text-lg font-bold text-navy">
            <span>Total</span>
            <span>{formatPrice(totalPrice)}</span>
          </div>
          <p className="mt-2 text-sm text-muted">
            Checkout kommer snart. Ring til os for at gennemføre dit køb.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Button href="tel:+4531364524" variant="primary">
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
