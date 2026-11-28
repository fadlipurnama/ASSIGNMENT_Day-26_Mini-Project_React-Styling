export function formatPrice(price) {
  if (price == null) return null;

  const numericPrice = Number(price);
  if (!Number.isFinite(numericPrice)) return null;
  if (numericPrice === 0) return "Free";

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: numericPrice % 1 === 0 ? 0 : 2,
    maximumFractionDigits: 2,
  }).format(numericPrice);
}
