import crypto from "crypto";

const API_BASE = "https://api.quickpay.net";
const API_VERSION = "v10";

export interface QuickPayPayment {
  id: number;
  order_id: string;
  accepted: boolean;
  state: string;
  currency: string;
  link?: { url: string };
  operations: Array<{
    type: string;
    amount: number;
    qp_status_code: string;
    qp_status_msg: string;
  }>;
  metadata?: {
    customer_email?: string;
  };
}

export function isQuickPayConfigured(): boolean {
  return Boolean(process.env.QUICKPAY_API_KEY);
}

function getAuthHeader(): string {
  const apiKey = process.env.QUICKPAY_API_KEY;

  if (!apiKey) {
    throw new Error("QUICKPAY_API_KEY is not configured");
  }

  return `Basic ${Buffer.from(`:${apiKey}`).toString("base64")}`;
}

async function quickPayRequest<T>(method: string, path: string, body?: unknown): Promise<T> {
  const response = await fetch(`${API_BASE}${path}`, {
    method,
    headers: {
      Authorization: getAuthHeader(),
      "Accept-Version": API_VERSION,
      Accept: "application/json",
      ...(body ? { "Content-Type": "application/json" } : {}),
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  const data = (await response.json()) as T & { message?: string };

  if (!response.ok) {
    throw new Error(data.message ?? "QuickPay-anmodning mislykkedes");
  }

  return data;
}

export async function createPayment(orderId: string, currency = "DKK"): Promise<QuickPayPayment> {
  return quickPayRequest<QuickPayPayment>("POST", "/payments", {
    order_id: orderId,
    currency,
  });
}

export async function createPaymentLink(
  paymentId: number,
  options: {
    amount: number;
    continueUrl: string;
    cancelUrl: string;
    callbackUrl: string;
  }
): Promise<{ url: string }> {
  return quickPayRequest<{ url: string }>("PUT", `/payments/${paymentId}/link`, {
    amount: options.amount,
    continue_url: options.continueUrl,
    cancel_url: options.cancelUrl,
    callback_url: options.callbackUrl,
    auto_capture: 1,
  });
}

export async function getPayment(paymentId: number): Promise<QuickPayPayment> {
  return quickPayRequest<QuickPayPayment>("GET", `/payments/${paymentId}`);
}

export function isPaymentSuccessful(payment: QuickPayPayment): boolean {
  if (payment.accepted) {
    return true;
  }

  return payment.operations.some(
    (operation) =>
      (operation.type === "capture" || operation.type === "authorize") &&
      operation.qp_status_code === "20000"
  );
}

export function verifyCallbackChecksum(
  rawBody: string,
  checksum: string,
  privateKey: string
): boolean {
  const expected = crypto.createHmac("sha256", privateKey).update(rawBody).digest("hex");

  if (expected.length !== checksum.length) {
    return false;
  }

  return crypto.timingSafeEqual(Buffer.from(expected), Buffer.from(checksum));
}
