import type { Metadata } from "next";
import { ComputerLandingPage } from "@/components/seo/ComputerLandingPage";
import { computerLandingPages } from "@/lib/computer-landing-pages";

const config = computerLandingPages.macbook;
export const metadata: Metadata = {
  title: "MacBook klar til brug med dine filer",
  description: "Vælg MacBook Air eller MacBook Pro som komplet pakke med klargøring, dataoverførsel og installation i hjemmet.",
  alternates: { canonical: config.path },
};
export default function Page() { return <ComputerLandingPage config={config} />; }
