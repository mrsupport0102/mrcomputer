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
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:rounded-3xl">
      <Link href={`/produkter/${product.slug}`} className="relative aspect-[4/3] bg-gray-50">
        {(product.slug === "tryghedspakke" || (product.badge && product.slug !== "komfortpakke")) && (
          <div className="absolute left-1.5 top-1.5 z-10 sm:left-3 sm:top-3">
            <Badge variant="featured" className="px-2 py-1 text-[9px] sm:px-3 sm:text-xs">
              {product.slug === "tryghedspakke" ? "Mest valgt" : product.badge}
            </Badge>
          </div>
        )}
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
          className={product.category === "pakker" ? "object-contain p-2.5 transition-transform group-hover:scale-105 sm:p-8" : "object-cover transition-transform group-hover:scale-105"}
        />
      </Link>

      <div className="flex flex-1 flex-col p-3 sm:p-6">
        <p className="text-[9px] font-bold uppercase leading-tight tracking-[0.08em] text-green sm:text-[11px] sm:tracking-[0.14em]">
          {product.category === "pakker" ? `${product.supportMonths} mdr. tryghed inkluderet` : product.category === "ydelser" ? "Personlig tryghed" : "Klar til brug"}
        </p>
        <Link href={`/produkter/${product.slug}`}>
          <h3 className="mt-1 text-[15px] font-bold leading-tight text-navy group-hover:text-green sm:mt-2 sm:text-lg">
            {product.name}
          </h3>
        </Link>
        <p className="mt-1 hidden flex-1 text-sm text-muted line-clamp-2 sm:block">
          {product.shortDescription}
        </p>
        <ul className="mt-4 hidden space-y-2 border-t border-slate-100 pt-4 sm:block">
          {product.included.slice(0, 2).map((item) => (
            <li key={item} className="flex gap-2 text-xs leading-snug text-navy"><CheckCircleIcon className="h-4 w-4 shrink-0 text-green" />{item}</li>
          ))}
        </ul>
        <div className="mt-auto flex flex-col gap-2 pt-3 sm:mt-5 sm:gap-3 sm:pt-0">
          <PriceDisplay price={product.price} salePrice={product.salePrice} />
          <ButtonNative
            variant="primary"
            className="w-full px-2 py-2 text-xs sm:px-4 sm:py-2.5 sm:text-sm"
            onClick={() => addItem(product)}
          >
            Tilføj til kurv
          </ButtonNative>
        </div>
      </div>
    </article>
  );
}
