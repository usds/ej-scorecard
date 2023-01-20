/**
 * This function expects the string to be in title
 * case with spaces between words
 * @param str
 * @returns {string}
 */
export const toKebabCase = (str: string) =>
  str.toLowerCase().split(` `).join(`-`);

/**
 * Chunks an array into smaller arrays of a given size.
 * @template T
 * @param {T[]} arr - The array to be chunked.
 * @param {number} chunkSize - The maximum size of each chunk.
 * @returns {T[][]} - An array of arrays where each sub-array has a maximum size of chunkSize.
 */
export function chunkArray<T>(arr: T[], chunkSize: number): T[][] {
  const results: T[][] = [];
  while (arr.length) {
    results.push(arr.splice(0, chunkSize));
  }
  return results;
}
