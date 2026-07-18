"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { ButtonNative } from "@/components/ui/Button";

export function CheckoutButton() {
  const { items } = useCart();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleCheckout() {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: items.map(({ product, quantity }) => ({
            productId: product.id,
            quantity,
          })),
        }),
      });

      const data = (await response.json()) as { url?: string; error?: string };

      if (!response.ok || !data.url) {
        throw new Error(data.error ?? "Kunne ikke starte betaling");
      }

      window.location.href = data.url;
    } catch (checkoutError) {
      setError(
        checkoutError instanceof Error
          ? checkoutError.message
          : "Kunne ikke starte betaling"
      );
      setLoading(false);
    }
  }

  return (
    <div className="w-full sm:w-auto">
      <ButtonNative
        variant="primary"
        className="w-full px-6 py-3 sm:w-auto"
        onClick={handleCheckout}
        disabled={loading}
      >
        {loading ? "Sender dig til betaling…" : "Gå til sikker betaling"}
      </ButtonNative>
      {error && (
        <p className="mt-2 text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
