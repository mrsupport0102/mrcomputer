"use client";

import Link from "next/link";
import Image from "next/image";
import { Product } from "@/lib/types";
import { Badge } from "@/components/ui/Badge";
import { PriceDisplay } from "@/components/ui/PriceDisplay";
import { ButtonNative } from "@/components/ui/Button";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md">
      <Link href={`/produkter/${product.slug}`} className="relative aspect-[4/3] bg-gray-50">
        {product.badge && (
          <div className="absolute left-3 top-3 z-10">
            <Badge variant={product.salePrice ? "sale" : "featured"}>
              {product.badge}
            </Badge>
          </div>
        )}
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-contain p-8 transition-transform group-hover:scale-105"
        />
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <Link href={`/produkter/${product.slug}`}>
          <h3 className="font-semibold text-navy group-hover:text-green">
            {product.name}
          </h3>
        </Link>
        <p className="mt-2 flex-1 text-sm text-muted line-clamp-2">
          {product.shortDescription}
        </p>
        <div className="mt-4 flex flex-col gap-3">
          <PriceDisplay price={product.price} salePrice={product.salePrice} />
          <ButtonNative
            variant="primary"
            className="w-full px-4 py-2.5 text-sm"
            onClick={() => addItem(product)}
          >
            Tilføj til kurv
          </ButtonNative>
        </div>
      </div>
    </article>
  );
}
