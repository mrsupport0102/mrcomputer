"use client";

import { useEffect, useState } from "react";
import { formatPrice } from "@/lib/format-price";

interface PaymentDetails {
  customerEmail: string | null;
  amountTotal: number;
  orderId: string;
}

interface OrderConfirmationProps {
  paymentId: string | null;
}

const GOOGLE_ADS_PURCHASE_DESTINATION = "AW-18404835407/YGGuCN-jgeYcEM-AjshE";

export function OrderConfirmation({ paymentId }: OrderConfirmationProps) {
  const [details, setDetails] = useState<PaymentDetails | null>(null);
  const [fetchError, setFetchError] = useState<string | null>(null);

  useEffect(() => {
    if (!paymentId) return;

    fetch(`/api/checkout/payment?payment_id=${encodeURIComponent(paymentId)}`)
      .then(async (response) => {
        const data = (await response.json()) as PaymentDetails & { error?: string };
        if (!response.ok) {
          throw new Error(data.error ?? "Ordren kunne ikke bekræftes.");
        }
        setDetails(data);
      })
      .catch((error) => {
        setFetchError(
          error instanceof Error ? error.message : "Ordren kunne ikke bekræftes."
        );
      });
  }, [paymentId]);

  useEffect(() => {
    if (!details || typeof window.gtag !== "function") return;

    const trackingKey = `mrcomputer-google-ads-purchase:${details.orderId}`;
    if (window.localStorage.getItem(trackingKey)) return;

    window.gtag("event", "conversion", {
      send_to: GOOGLE_ADS_PURCHASE_DESTINATION,
      value: details.amountTotal / 100,
      currency: "DKK",
      transaction_id: details.orderId,
    });
    window.localStorage.setItem(trackingKey, "sent");
  }, [details]);

  if (!paymentId) {
    return (
      <>
        <h1 className="text-3xl font-bold text-navy">Tak for din henvendelse</h1>
        <p className="mt-4 text-muted">Ordren kunne ikke bekræftes.</p>
      </>
    );
  }

  if (fetchError) {
    return (
      <>
        <h1 className="text-3xl font-bold text-navy">Tak for din henvendelse</h1>
        <p className="mt-4 text-muted">{fetchError}</p>
      </>
    );
  }

  if (!details) {
    return <p className="text-muted">Henter ordrebekræftelse…</p>;
  }

  return (
    <>
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green/10 text-2xl text-green">
        ✓
      </div>
      <h1 className="mt-6 text-3xl font-bold text-navy">Tak for din bestilling!</h1>
      <p className="mt-4 text-muted">
        Din betaling er modtaget. Vi kontakter dig hurtigst muligt for at aftale afhentning
        af din gamle computer inden for 1–2 hverdage. Inden for 3–4 hverdage leverer og
        installerer vi den nye computer hjemme hos dig med dine filer, billeder og dokumenter flyttet.
      </p>
      <div className="mt-8 rounded-2xl border border-gray-200 bg-surface p-6 text-left">
        <p className="text-sm text-muted">Ordrenummer</p>
        <p className="mt-1 font-medium text-navy">{details.orderId}</p>
        <p className="mt-4 text-sm text-muted">Betalt beløb</p>
        <p className="mt-1 text-2xl font-bold text-navy">
          {formatPrice(details.amountTotal / 100)}
        </p>
        {details.customerEmail && (
          <>
            <p className="mt-4 text-sm text-muted">Bekræftelse sendes til</p>
            <p className="mt-1 font-medium text-navy">{details.customerEmail}</p>
          </>
        )}
      </div>
    </>
  );
}
