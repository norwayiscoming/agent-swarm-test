/**
 * Basic math utilities
 */

export function add(a: number, b: number): number {
  return a + b;
}

export function subtract(a: number, b: number): number {
  return a - b;
}

// TODO: add multiply and divide functions

export function factorial(n: number): number {
  if (n <= 1) return 1;
  return n * factorial(n - 1); // potential stack overflow for large n
}

export function fibonacci(n: number): number {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2); // O(2^n) - very slow
}

export function isPrime(n: number): boolean {
  if (n < 2) return false;
  for (let i = 2; i < n; i++) { // could be optimized to sqrt(n)
    if (n % i === 0) return false;
  }
  return true;
}
