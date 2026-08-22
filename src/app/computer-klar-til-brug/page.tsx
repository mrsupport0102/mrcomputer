import type { Metadata } from "next";
import { ComputerLandingPage } from "@/components/seo/ComputerLandingPage";
import { computerLandingPages } from "@/lib/computer-landing-pages";

const config = computerLandingPages.ready;
export const metadata: Metadata = {
  title: "Ny computer klar til brug ved levering",
  description: "Køb en computer, der leveres opsat og installeret med dine filer og billeder. Se computerpakker klar til brug.",
  alternates: { canonical: config.path },
};
export default function Page() { return <ComputerLandingPage config={config} />; }
