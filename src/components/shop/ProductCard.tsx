"use client";

import Link from "next/link";
import Image from "next/image";
import { Product } from "@/lib/types";
import { Badge } from "@/components/ui/Badge";
import { PriceDisplay } from "@/components/ui/PriceDisplay";
import { ButtonNative } from "@/components/ui/Button";
import { useCart } from "@/context/CartContext";
import { CheckCircleIcon } from "@/components/home/icons";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();

  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <Link href={`/produkter/${product.slug}`} className="relative aspect-[4/3] bg-gray-50">
        {(product.slug === "tryghedspakke" || (product.badge && product.slug !== "komfortpakke")) && (
          <div className="absolute left-3 top-3 z-10">
            <Badge variant="featured">
              {product.slug === "tryghedspakke" ? "Mest valgt" : product.badge}
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

      <div className="flex flex-1 flex-col p-6">
        <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-green">
          {product.category === "pakker" ? `${product.supportMonths} mdr. tryghed inkluderet` : product.category === "ydelser" ? "Personlig tryghed" : "Klar til brug"}
        </p>
        <Link href={`/produkter/${product.slug}`}>
          <h3 className="mt-2 text-lg font-bold text-navy group-hover:text-green">
            {product.name}
          </h3>
        </Link>
        <p className="mt-2 flex-1 text-sm text-muted line-clamp-2">
          {product.shortDescription}
        </p>
        <ul className="mt-4 space-y-2 border-t border-slate-100 pt-4">
          {product.included.slice(0, 2).map((item) => (
            <li key={item} className="flex gap-2 text-xs leading-snug text-navy"><CheckCircleIcon className="h-4 w-4 shrink-0 text-green" />{item}</li>
          ))}
        </ul>
        <div className="mt-5 flex flex-col gap-3">
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
