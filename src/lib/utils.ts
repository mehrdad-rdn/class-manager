import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function toPersianDigits(str: string | number): string {
  return String(str).replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹".charAt(Number(d)));
}
