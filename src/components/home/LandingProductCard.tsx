"use client";

import Link from "next/link";
import Image from "next/image";
import { Product } from "@/lib/types";
import { Badge } from "@/components/ui/Badge";
import { PriceDisplay } from "@/components/ui/PriceDisplay";
import { ButtonNative } from "@/components/ui/Button";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

interface LandingProductCardProps {
  product: Product;
  featured?: boolean;
}

export function LandingProductCard({ product, featured }: LandingProductCardProps) {
  const { addItem } = useCart();

  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-3xl border bg-white transition-all duration-300",
        featured
          ? "border-green/30 shadow-lg shadow-green/5 ring-1 ring-green/10 lg:flex-row"
          : "border-gray-200/80 shadow-sm hover:-translate-y-1 hover:border-gray-300 hover:shadow-lg"
      )}
    >
      <Link
        href={`/produkter/${product.slug}`}
        className={cn(
          "relative bg-gradient-to-b from-gray-50 to-white",
          featured ? "lg:w-[42%]" : "aspect-[4/3]"
        )}
      >
        {product.badge && (
          <div className="absolute left-4 top-4 z-10">
            <Badge variant={product.salePrice ? "sale" : "featured"}>
              {product.badge}
            </Badge>
          </div>
        )}
        <div className={cn("relative", featured ? "aspect-square lg:aspect-auto lg:h-full" : "h-full")}>
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes={featured ? "(max-width: 1024px) 100vw, 420px" : "(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"}
            className="object-contain p-8 transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
      </Link>

      <div className={cn("flex flex-1 flex-col p-6 md:p-7", featured && "lg:justify-center")}>
        {product.supportMonths > 0 && (
          <p className="text-xs font-semibold uppercase tracking-wider text-green">
            {product.supportMonths} mdr. support inkl.
          </p>
        )}

        <Link href={`/produkter/${product.slug}`}>
          <h3
            className={cn(
              "font-bold text-navy transition-colors group-hover:text-green",
              featured ? "mt-2 text-xl md:text-2xl" : "mt-1 text-lg"
            )}
          >
            {product.name}
          </h3>
        </Link>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted md:text-[15px]">
          {product.shortDescription}
        </p>

        <ul className="mt-4 hidden gap-2 sm:flex sm:flex-wrap">
          {product.included.slice(0, 2).map((item) => (
            <li
              key={item}
              className="rounded-full bg-gray-100 px-3 py-1 text-xs text-navy/80"
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex items-end justify-between gap-4 border-t border-gray-100 pt-5">
          <PriceDisplay
            price={product.price}
            salePrice={product.salePrice}
            size={featured ? "lg" : "md"}
          />
          <div className="flex gap-2">
            <Link
              href={`/produkter/${product.slug}`}
              className="hidden rounded-full px-4 py-2.5 text-sm font-semibold text-navy transition hover:bg-gray-100 sm:inline-flex"
            >
              Læs mere
            </Link>
            <ButtonNative
              variant="primary"
              className="px-5 py-2.5 text-sm"
              onClick={() => addItem(product)}
            >
              Tilføj
            </ButtonNative>
          </div>
        </div>
      </div>
    </article>
  );
}
