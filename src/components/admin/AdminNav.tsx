"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/admin", label: "Overblik" },
  { href: "/admin/products", label: "Produkter" },
  { href: "/admin/products/new", label: "Opret pakke" },
];

export function AdminNav() {
  const pathname = usePathname();

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    window.location.href = "/admin/login";
  }

  return (
    <header className="border-b border-white/10 bg-navy text-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4 lg:px-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green">Admin</p>
          <h1 className="text-lg font-bold">MR Computer Shop</h1>
        </div>

        <nav className="flex flex-wrap items-center gap-2">
          {links.map((link) => {
            const active =
              link.href === "/admin"
                ? pathname === "/admin"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active ? "bg-green text-white" : "bg-white/10 hover:bg-white/15"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/"
            className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium hover:bg-white/15"
          >
            Se webshop
          </Link>
          <button
            type="button"
            onClick={handleLogout}
            className="rounded-full border border-white/20 px-4 py-2 text-sm font-medium hover:bg-white/10"
          >
            Log ud
          </button>
        </nav>
      </div>
    </header>
  );
}
