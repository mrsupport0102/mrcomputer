import { randomUUID } from "crypto";
import { getProductById } from "@/lib/products-store";
import { Product } from "@/lib/types";

export interface CheckoutLineItem {
  productId: string;
  quantity: number;
}

export interface ValidatedCartLine {
  product: Product;
  quantity: number;
  unitPrice: number;
}

export async function validateCheckoutItems(items: CheckoutLineItem[]): Promise<ValidatedCartLine[]> {
  if (!items.length) {
    throw new Error("Kurven er tom");
  }

  const validated: ValidatedCartLine[] = [];

  for (const item of items) {
    if (!item.productId || item.quantity < 1 || item.quantity > 10) {
      throw new Error("Ugyldigt produkt eller antal i kurven");
    }

    const product = await getProductById(item.productId);
    if (!product) {
      throw new Error("Et produkt i kurven findes ikke længere");
    }

    validated.push({
      product,
      quantity: item.quantity,
      unitPrice: product.salePrice ?? product.price,
    });
  }

  return validated;
}

export function getCheckoutTotalOre(lines: ValidatedCartLine[]): number {
  return lines.reduce((sum, { unitPrice, quantity }) => sum + unitPrice * quantity * 100, 0);
}

export function createOrderId(): string {
  // QuickPay only accepts 4-20 alphanumeric characters for order IDs.
  const timestamp = Date.now().toString(36);
  const suffix = randomUUID().replaceAll("-", "").slice(0, 6);

  return `mc${timestamp}${suffix}`;
}
