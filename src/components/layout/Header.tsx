"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/Button";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Hjem" },
  { href: "/butik", label: "Butik" },
  { href: "/forloeb", label: "Forløb" },
  { href: "/tryghedsaftale", label: "Tryghedsaftale" },
  { href: "/kontakt", label: "Kontakt" },
];

export function Header() {
  const pathname = usePathname();
  const { totalItems } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-navy text-white shadow-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 lg:px-6">
        <Logo priority />

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primær menu">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-green",
                pathname === link.href && "text-green"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/kurv"
            className="relative flex items-center gap-1 rounded-full p-2 hover:bg-white/10"
            aria-label={`Indkøbskurv, ${totalItems} varer`}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
            {totalItems > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-green text-xs font-bold">
                {totalItems}
              </span>
            )}
          </Link>

          <Button href="/butik" variant="primary" className="hidden px-5 py-2.5 text-sm sm:inline-flex">
            Køb Pakke
          </Button>

          <button
            type="button"
            className="rounded-lg p-2 hover:bg-white/10 md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Åbn menu"
            aria-expanded={mobileOpen}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="border-t border-white/10 px-4 py-4 md:hidden" aria-label="Mobil menu">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm font-medium hover:bg-white/10",
                  pathname === link.href && "bg-white/10 text-green"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Button href="/butik" variant="primary" className="mt-2 text-center">
              Køb Pakke
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
