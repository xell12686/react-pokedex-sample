export function formatNumberWithLeadingZeros(
  number: number | string,
  desiredLength: number
): string {
  const numericNumber =
    typeof number === "string" ? parseInt(number, 10) : number;
  return String(numericNumber).padStart(desiredLength, "0");
}
