// lib/utils.ts
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function cnf(...inputs: (string | undefined | null | false)[]) {
  return inputs.filter(Boolean).join(" ");
}
