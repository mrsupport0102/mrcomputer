"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { OrderConfirmation } from "@/components/cart/OrderConfirmation";

export function ThankYouContent() {
  const searchParams = useSearchParams();
  const paymentId = searchParams.get("payment_id");
  const { clearCart } = useCart();

  useEffect(() => {
    if (paymentId) {
      clearCart();
    }
  }, [paymentId, clearCart]);

  return <OrderConfirmation paymentId={paymentId} />;
}
