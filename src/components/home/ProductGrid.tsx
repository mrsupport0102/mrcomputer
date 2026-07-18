import { Product } from "@/lib/types";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { LandingProductCard } from "./LandingProductCard";

interface ProductGridProps {
  products: Product[];
}

export function ProductGrid({ products }: ProductGridProps) {
  const featured =
    products.find((p) => p.slug === "komfortpakke") ?? products[0];
  const rest = products.filter((p) => p.id !== featured?.id).slice(0, 4);

  if (!featured) return null;

  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            align="left"
            eyebrow="Computerpakker"
            title="Vores populære pakker"
            description="Opsætning, hjemmeinstallation og dataoverførsel er altid inkluderet. 6 eller 12 måneders fast support medfølger."
          />
          <Button href="/butik" variant="outline" className="shrink-0 self-start lg:self-auto">
            Se alle pakker
          </Button>
        </div>

        <div className="mt-12 flex flex-col gap-5">
          <LandingProductCard product={featured} featured />
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {rest.map((product) => (
              <LandingProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
