import { HeroSection } from "@/components/home/HeroSection";
import { PartnerBar } from "@/components/home/PartnerBar";
import { ProductGrid } from "@/components/home/ProductGrid";
import { ProcessSection } from "@/components/home/ProcessSection";
import { BenefitsSection } from "@/components/home/BenefitsSection";
import { AboutSection } from "@/components/home/AboutSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CallToAction } from "@/components/home/CallToAction";
import { getFeaturedProducts } from "@/lib/products-store";

export const revalidate = 60;

export default async function HomePage() {
  const featured = await getFeaturedProducts();

  return (
    <>
      <HeroSection />
      <PartnerBar />
      <ProductGrid products={featured} />
      <ProcessSection />
      <BenefitsSection />
      <AboutSection />
      <TestimonialsSection />
      <CallToAction />
    </>
  );
}
