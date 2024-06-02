export const getDecimalPart = (n: number) => n = Math.floor(n);
export const getAbsolutePart = (n: number) => Math.floor(n - getDecimalPart(n));
export const roundUpper = (n: number): number => getDecimalPart(n) !== 0 ? getAbsolutePart(n) + 1 : getAbsolutePart(n);