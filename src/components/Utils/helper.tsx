export const convertToCurrency = (
  amount: number,
  currency: string,
  limit?: number
): string => {
  return `${limit !== undefined ? amount.toFixed(limit) : amount} ${currency}`;
};
