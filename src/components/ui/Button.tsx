import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost-light";

interface ButtonProps extends React.ComponentProps<typeof Link> {
  variant?: ButtonVariant;
}

interface NativeButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  href?: never;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-green text-white hover:bg-green-hover shadow-sm",
  secondary:
    "bg-navy text-white hover:bg-navy-light",
  outline:
    "border-2 border-green text-green bg-white hover:bg-green/5",
  "ghost-light":
    "border border-white/20 bg-white/5 text-white hover:bg-white/10",
};

const base =
  "inline-flex min-h-11 items-center justify-center rounded-full px-6 py-3 text-sm font-semibold leading-none transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green";

export function Button({
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  return (
    <Link
      className={cn(base, variants[variant], className)}
      {...props}
    />
  );
}

export function ButtonNative({
  variant = "primary",
  className,
  ...props
}: NativeButtonProps) {
  return (
    <button
      className={cn(base, variants[variant], className)}
      {...props}
    />
  );
}
