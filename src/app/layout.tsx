import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { ConditionalShell } from "@/components/layout/ConditionalShell";
import { GoogleAdsTracking } from "@/components/analytics/GoogleAdsTracking";
import { JsonLd } from "@/components/seo/JsonLd";
import { organizationJsonLd, siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "MR Computer – Ny computer. Klar til brug. Tryghed inkluderet.",
    template: "%s | MR Computer",
  },
  description:
    "Bærbare computere og computerpakker med opsætning, dataoverførsel og personlig tryghed. Leveret klar til brug i hele Danmark.",
  icons: {
    icon: "/icon",
    apple: "/logo-hd.png",
  },
  openGraph: {
    type: "website",
    locale: "da_DK",
    siteName: "MR Computer",
    title: "MR Computer – Ny computer. Klar til brug. Tryghed inkluderet.",
    description:
      "Bærbare computere og computerpakker med opsætning, dataoverførsel og personlig tryghed.",
    images: [{ url: "/hero-laptop.png", alt: "Computer fra MR Computer klar til brug" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MR Computer – computer klar til brug",
    description: "Computerpakker med opsætning, dataoverførsel og personlig tryghed.",
    images: ["/hero-laptop.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="da" className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        <JsonLd data={organizationJsonLd} />
        <Script id="google-consent-default" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              ad_storage: 'denied',
              analytics_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied',
              wait_for_update: 500
            });
          `}
        </Script>
        <GoogleAdsTracking />
        <CartProvider>
          <ConditionalShell>{children}</ConditionalShell>
        </CartProvider>
      </body>
    </html>
  );
}
