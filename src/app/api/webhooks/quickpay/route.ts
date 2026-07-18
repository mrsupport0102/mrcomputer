import { NextResponse } from "next/server";
import {
  isPaymentSuccessful,
  QuickPayPayment,
  verifyCallbackChecksum,
} from "@/lib/quickpay";

export async function POST(request: Request) {
  const privateKey = process.env.QUICKPAY_PRIVATE_KEY;

  if (!privateKey) {
    return NextResponse.json(
      { error: "QUICKPAY_PRIVATE_KEY is not configured" },
      { status: 503 }
    );
  }

  const checksum = request.headers.get("QuickPay-Checksum-Sha256");

  if (!checksum) {
    return NextResponse.json({ error: "Missing QuickPay-Checksum-Sha256 header" }, { status: 400 });
  }

  const payload = await request.text();

  if (!verifyCallbackChecksum(payload, checksum, privateKey)) {
    return NextResponse.json({ error: "Invalid callback checksum" }, { status: 403 });
  }

  try {
    const payment = JSON.parse(payload) as QuickPayPayment;

    if (isPaymentSuccessful(payment)) {
      console.info("[quickpay] payment completed", {
        paymentId: payment.id,
        orderId: payment.order_id,
        state: payment.state,
      });
    }
  } catch {
    return NextResponse.json({ error: "Invalid callback payload" }, { status: 400 });
  }

  return NextResponse.json({ received: true });
}
