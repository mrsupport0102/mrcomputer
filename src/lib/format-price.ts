export function formatPrice(amount: number): string {
  return new Intl.NumberFormat("da-DK", {
    style: "currency",
    currency: "DKK",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}
