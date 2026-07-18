import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-xl",
        className
      )}
    >
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green">
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "font-bold tracking-tight text-navy",
          eyebrow ? "mt-3" : "",
          align === "center" ? "text-3xl md:text-4xl" : "text-3xl md:text-[2.5rem] md:leading-tight"
        )}
      >
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
