import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "sale" | "featured" | "default";
  className?: string;
}

const variants = {
  sale: "bg-green text-white",
  featured: "bg-navy text-white",
  default: "bg-gray-100 text-navy",
};

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-block rounded-full px-3 py-1 text-xs font-semibold",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
