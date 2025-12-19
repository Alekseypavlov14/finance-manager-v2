import { PERCENTS_AMOUNT } from '@/shared/constants'

export function formatAsMoney(value: number): string {
  return value.toFixed(2)
}

export function roundAsMoney(value: number): number {
  return Number(formatAsMoney(value))
}

export function formatAsPercent(value: number): string {
  return (value * PERCENTS_AMOUNT).toFixed(2)
}
