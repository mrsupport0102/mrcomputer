import type { Metadata } from "next";
import { ComputerLandingPage } from "@/components/seo/ComputerLandingPage";
import { computerLandingPages } from "@/lib/computer-landing-pages";

const config = computerLandingPages.gaming;
export const metadata: Metadata = {
  title: "Gaming-computer med høj ydelse – klar til spil",
  description: "Vælg en gaming-computer efter dine spil. Leveres opdateret, testet og klar til brug med personlig tryghed.",
  alternates: { canonical: config.path },
};
export default function Page() { return <ComputerLandingPage config={config} />; }
