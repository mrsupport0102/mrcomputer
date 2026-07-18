import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import { createProduct, getAllProducts, ProductInput } from "@/lib/products-store";

export async function GET() {
  const products = await getAllProducts();
  return NextResponse.json({ products });
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ProductInput;
    const product = await createProduct(body);

    revalidatePath("/");
    revalidatePath("/butik");
    revalidatePath("/produkter/[slug]", "page");
    revalidatePath("/api/products");

    return NextResponse.json({ product }, { status: 201 });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Kunne ikke oprette produkt";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
