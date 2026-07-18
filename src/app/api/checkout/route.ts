import { NextResponse } from "next/server";
import {
  createOrderId,
  getCheckoutTotalOre,
  validateCheckoutItems,
  CheckoutLineItem,
} from "@/lib/checkout";
import { createPayment, createPaymentLink, isQuickPayConfigured } from "@/lib/quickpay";
import { getSiteUrl } from "@/lib/site";

export async function POST(request: Request) {
  if (!isQuickPayConfigured()) {
    return NextResponse.json(
      { error: "Betaling er ikke konfigureret endnu. Kontakt os på 31 36 45 24." },
      { status: 503 }
    );
  }

  try {
    const body = (await request.json()) as { items?: CheckoutLineItem[] };
    const lines = await validateCheckoutItems(body.items ?? []);
    const amount = getCheckoutTotalOre(lines);
    const siteUrl = getSiteUrl();
    const orderId = createOrderId();

    const payment = await createPayment(orderId);
    const continueUrl = `${siteUrl}/kurv/tak?payment_id=${payment.id}`;
    const cancelUrl = `${siteUrl}/kurv?annulleret=1`;
    const callbackUrl = `${siteUrl}/api/webhooks/quickpay`;

    const link = await createPaymentLink(payment.id, {
      amount,
      continueUrl,
      cancelUrl,
      callbackUrl,
    });

    if (!link.url) {
      throw new Error("QuickPay returnerede ingen betalingslink");
    }

    return NextResponse.json({ url: link.url });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Kunne ikke starte betaling";

    return NextResponse.json({ error: message }, { status: 400 });
  }
}
