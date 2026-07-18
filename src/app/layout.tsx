import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { ConditionalShell } from "@/components/layout/ConditionalShell";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mrcomputer.dk";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "MR Computer – Ny computer. Klar til brug. Tryghed inkluderet.",
    template: "%s | MR Computer",
  },
  description:
    "Computerpakker med opsætning, dataoverførsel og personlig IT-hjælp inkluderet. Levering i hele Danmark.",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "da_DK",
    siteName: "MR Computer",
    title: "MR Computer – Ny computer. Klar til brug. Tryghed inkluderet.",
    description:
      "Computerpakker med opsætning, dataoverførsel og personlig IT-hjælp inkluderet.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="da" className={`${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <CartProvider>
          <ConditionalShell>{children}</ConditionalShell>
        </CartProvider>
      </body>
    </html>
  );
}
