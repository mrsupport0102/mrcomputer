import Image from "next/image";

const brands = [
  { name: "Lenovo", src: "/brands/lenovo.svg" },
  { name: "HP", src: "/brands/hp.svg" },
  { name: "Acer", src: "/brands/acer.svg" },
  { name: "Apple", src: "/brands/apple.svg" },
  { name: "Asus", src: "/brands/asus.svg" },
  { name: "Dell", src: "/brands/dell.svg" },
  { name: "Microsoft", src: "/brands/microsoft.svg" },
  { name: "Samsung", src: "/brands/samsung.svg" },
  { name: "MSI", src: "/brands/msi.svg" },
];

function BrandLogo({ name, src }: { name: string; src: string }) {
  return (
    <div className="mx-10 flex h-11 w-32 shrink-0 items-center justify-center opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0 md:mx-12 md:h-12 md:w-36">
      <Image
        src={src}
        alt={name}
        width={144}
        height={48}
        className="max-h-9 w-auto object-contain md:max-h-10"
      />
    </div>
  );
}

export function PartnerBar() {
  const track = [...brands, ...brands];

  return (
    <section className="border-y border-gray-100 bg-white py-7">
      <p className="mb-5 text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
        Vi arbejder med de bedste mærker
      </p>
      <div className="marquee-mask relative overflow-hidden">
        <div className="marquee-track flex w-max items-center">
          {track.map((brand, index) => (
            <BrandLogo
              key={`${brand.name}-${index}`}
              name={brand.name}
              src={brand.src}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
