import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <h1 className="text-6xl font-bold text-navy">404</h1>
      <p className="mt-4 text-xl text-muted">Siden blev ikke fundet</p>
      <p className="mt-2 text-sm text-muted">
        Det ser ud til, at vi ikke kan finde det, du leder efter.
      </p>
      <div className="mt-8 flex gap-4">
        <Button href="/">Gå til forsiden</Button>
        <Link href="/butik" className="text-green hover:underline">
          Se butik
        </Link>
      </div>
    </div>
  );
}
