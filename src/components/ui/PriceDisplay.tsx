import { formatPrice } from "@/lib/format-price";
import { cn } from "@/lib/utils";

interface PriceDisplayProps {
  price: number;
  salePrice?: number;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function PriceDisplay({
  price,
  salePrice,
  className,
  size = "md",
}: PriceDisplayProps) {
  const sizes = {
    sm: "text-base",
    md: "text-lg",
    lg: "text-2xl",
  };

  if (salePrice) {
    return (
      <div className={cn("flex flex-wrap items-baseline gap-2", className)}>
        <span className={cn("font-bold text-green", sizes[size])}>
          {formatPrice(salePrice)}
        </span>
        <span className="text-sm text-muted line-through">
          {formatPrice(price)}
        </span>
      </div>
    );
  }

  return (
    <span className={cn("font-bold text-navy", sizes[size], className)}>
      {formatPrice(price)}
    </span>
  );
}
