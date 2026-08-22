import type { Metadata } from "next";
import { ComputerLandingPage } from "@/components/seo/ComputerLandingPage";
import { computerLandingPages } from "@/lib/computer-landing-pages";

const config = computerLandingPages.senior;
export const metadata: Metadata = {
  title: "Computer til seniorer – opsat og installeret",
  description: "Find en enkel og driftssikker computer til seniorer. Leveres opsat hjemme hos dig med dine filer og personlig tryghed.",
  alternates: { canonical: config.path },
};
export default function Page() { return <ComputerLandingPage config={config} />; }
