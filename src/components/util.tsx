/**
 * This function expects the string to be in title
 * case with spaces between words
 * @param str
 * @returns {string}
 */
export const toKebabCase = (str: string) =>
  str.toLowerCase().split(` `).join(`-`);
