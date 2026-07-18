import { NextResponse } from "next/server";
import { getPayment, isPaymentSuccessful, isQuickPayConfigured } from "@/lib/quickpay";

export async function GET(request: Request) {
  if (!isQuickPayConfigured()) {
    return NextResponse.json({ error: "Betaling er ikke konfigureret" }, { status: 503 });
  }

  const paymentIdParam = new URL(request.url).searchParams.get("payment_id");

  if (!paymentIdParam) {
    return NextResponse.json({ error: "Manglende payment_id" }, { status: 400 });
  }

  const paymentId = Number(paymentIdParam);

  if (!Number.isInteger(paymentId) || paymentId <= 0) {
    return NextResponse.json({ error: "Ugyldigt payment_id" }, { status: 400 });
  }

  try {
    const payment = await getPayment(paymentId);

    if (!isPaymentSuccessful(payment)) {
      return NextResponse.json({ error: "Betalingen er ikke gennemført" }, { status: 400 });
    }

    const paidAmount = payment.operations
      .filter(
        (operation) =>
          (operation.type === "capture" || operation.type === "authorize") &&
          operation.qp_status_code === "20000"
      )
      .reduce((sum, operation) => sum + operation.amount, 0);

    return NextResponse.json({
      customerEmail: payment.metadata?.customer_email ?? null,
      amountTotal: paidAmount,
      orderId: payment.order_id,
    });
  } catch {
    return NextResponse.json({ error: "Ordren kunne ikke bekræftes" }, { status: 400 });
  }
}
