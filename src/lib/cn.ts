import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Merge class names conditionally (clsx) and resolve Tailwind conflicts
 * (tailwind-merge) so later classes win. Every primitive uses this so callers
 * can override any utility via `className`.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
