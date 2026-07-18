import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
  priority?: boolean;
}

export function Logo({ className, priority }: LogoProps) {
  return (
    <Link href="/" className={`inline-flex shrink-0 ${className ?? ""}`}>
      <Image
        src="/logo.png"
        alt="MR Computer"
        width={160}
        height={46}
        className="h-9 w-auto md:h-10"
        priority={priority}
      />
    </Link>
  );
}
