"use client";

import { useState } from "react";
import { Product } from "@/lib/types";
import { ButtonNative } from "@/components/ui/Button";
import { useCart } from "@/context/CartContext";
import Link from "next/link";
import { formatPrice } from "@/lib/format-price";
import { getProductVariants, getStartingPrice, getVariantPackagePrice, productWithVariant } from "@/lib/product-variants";

export function AddToCartSection({ product }: { product: Product }) {
  const { addItem } = useCart();
  const variants = getProductVariants(product);
  const [variantId, setVariantId] = useState(variants[0]?.id ?? "");
  const selectedVariant = variants.find((variant) => variant.id === variantId) ?? variants[0];

  if (variants.length) {
    return (
      <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
        <label htmlFor="computer-variant" className="text-sm font-bold text-navy">Vælg den computer, der passer dig</label>
        <select id="computer-variant" value={variantId} onChange={(event) => setVariantId(event.target.value)} className="mt-3 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-navy outline-none focus:border-green">
          {variants.map((variant) => <option key={variant.id} value={variant.id}>{variant.name} — {formatPrice(getVariantPackagePrice(variant))}</option>)}
        </select>
        {selectedVariant && <div className="mt-4 rounded-xl bg-white p-4"><p className="font-bold text-navy">{selectedVariant.name}</p><p className="mt-1 text-sm text-muted">{selectedVariant.specifications}</p><div className="mt-3 flex items-end justify-between gap-3"><div><p className="text-xs text-muted">Samlet pakkepris</p><p className="text-2xl font-bold text-navy">{formatPrice(getVariantPackagePrice(selectedVariant))}</p></div><p className="text-xs text-green">Fra {formatPrice(getStartingPrice(product))}</p></div></div>}
        <div className="mt-4 flex flex-wrap gap-4"><ButtonNative variant="primary" className="px-8" onClick={() => selectedVariant && addItem(productWithVariant(product, selectedVariant))}>Tilføj valgt pakke</ButtonNative><Link href="/kurv" className="inline-flex items-center text-sm font-medium text-green hover:underline">Gå til kurv →</Link></div>
      </div>
    );
  }

  return (
    <div className="mt-8 flex flex-wrap gap-4">
      <ButtonNative
        variant="primary"
        className="px-8"
        onClick={() => addItem(product)}
      >
        Tilføj til kurv
      </ButtonNative>
      <Link
        href="/kurv"
        className="inline-flex items-center text-sm font-medium text-green hover:underline"
      >
        Gå til kurv →
      </Link>
    </div>
  );
}
