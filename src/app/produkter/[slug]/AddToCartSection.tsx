"use client";

import { Product } from "@/lib/types";
import { ButtonNative } from "@/components/ui/Button";
import { useCart } from "@/context/CartContext";
import Link from "next/link";

export function AddToCartSection({ product }: { product: Product }) {
  const { addItem } = useCart();

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
