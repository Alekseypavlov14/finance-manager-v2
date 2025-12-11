import { formatAsMoney } from '@/shared/utils/formatters'

export function formatTransactionAmount(amount: number) {
  if (amount === 0) return formatAsMoney(amount)

  if (amount > 0) return `+${formatAsMoney(Math.abs(amount))}`
  return `-${formatAsMoney(Math.abs(amount))}`
}
