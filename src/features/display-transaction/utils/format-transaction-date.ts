import { formatDateLong, formatDateShort } from '@/shared/utils/datetime'

export function formatTransactionDate(moment: number) {
  const date = new Date(moment)
  const now = new Date()

  if (date.getFullYear() === now.getFullYear()) return formatDateShort(moment)
  
  return formatDateLong(moment)
}
