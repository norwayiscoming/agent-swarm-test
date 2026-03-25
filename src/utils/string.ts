/**
 * String manipulation utilities
 */

export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function slugify(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

// TODO: add truncate function with ellipsis support

export function reverseString(str: string): string {
  return str.split('').reverse().join(''); // doesn't handle unicode properly
}

export function countWords(str: string): number {
  return str.split(' ').length; // naive: doesn't handle multiple spaces
}

export function toCamelCase(str: string): string {
  return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
}
