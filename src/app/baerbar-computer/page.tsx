import type { Metadata } from "next";
import { ComputerLandingPage } from "@/components/seo/ComputerLandingPage";
import { computerLandingPages } from "@/lib/computer-landing-pages";

const config = computerLandingPages.laptop;
export const metadata: Metadata = {
  title: "Bærbare computere opsat og klar til brug",
  description: "Find en bærbar computer med opsætning, dataoverførsel og installation hjemme hos dig. Se komplette computerpakker.",
  alternates: { canonical: config.path },
};
export default function Page() { return <ComputerLandingPage config={config} />; }
