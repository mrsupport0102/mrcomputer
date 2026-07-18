import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import {
  deleteProduct,
  getProductById,
  ProductInput,
  updateProduct,
} from "@/lib/products-store";

interface RouteContext {
  params: Promise<{ id: string }>;
}

export async function GET(_request: Request, context: RouteContext) {
  const { id } = await context.params;
  const product = await getProductById(id);

  if (!product) {
    return NextResponse.json({ error: "Produktet findes ikke" }, { status: 404 });
  }

  return NextResponse.json({ product });
}

export async function PUT(request: Request, context: RouteContext) {
  const { id } = await context.params;

  try {
    const body = (await request.json()) as ProductInput;
    const product = await updateProduct(id, body);

    revalidatePath("/");
    revalidatePath("/butik");
    revalidatePath(`/produkter/${product.slug}`);
    revalidatePath("/produkter/[slug]", "page");
    revalidatePath("/api/products");

    return NextResponse.json({ product });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Kunne ikke opdatere produkt";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}

export async function DELETE(_request: Request, context: RouteContext) {
  const { id } = await context.params;

  try {
    const existing = await getProductById(id);
    if (!existing) {
      return NextResponse.json({ error: "Produktet findes ikke" }, { status: 404 });
    }

    await deleteProduct(id);

    revalidatePath("/");
    revalidatePath("/butik");
    revalidatePath(`/produkter/${existing.slug}`);
    revalidatePath("/produkter/[slug]", "page");
    revalidatePath("/api/products");

    return NextResponse.json({ success: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Kunne ikke slette produkt";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
