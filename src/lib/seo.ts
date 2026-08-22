export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mrcomputer.dk";

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  "@id": `${siteUrl}/#organization`,
  name: "MR Computer",
  url: siteUrl,
  logo: `${siteUrl}/logo-hd.png`,
  image: `${siteUrl}/logo-hd.png`,
  telephone: "+45 31 36 45 24",
  email: "info@mrcomputer.dk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Lyngbakken 5",
    postalCode: "3400",
    addressLocality: "Hillerød",
    addressCountry: "DK",
  },
  areaServed: { "@type": "Country", name: "Danmark" },
  vatID: "DK40198237",
};

export function absoluteUrl(path: string) {
  return new URL(path, siteUrl).toString();
}
