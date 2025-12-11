import type { TransactionEntity } from '@/entities/transactions'
import { getDayOfWeekStartingFromMonday } from '@/shared/utils/datetime'
import { DateTime } from '@oleksii-pavlov/date-time'

// returns moment for the first day of week (monday)
export function groupTransactionsByWeek(transaction: TransactionEntity): number {
  const standardDayOfWeek = new Date(transaction.date).getDay()

  return new DateTime(transaction.date)
    .getDateTimeBefore({ days: getDayOfWeekStartingFromMonday(standardDayOfWeek) })
    .normalizeDate()
    .getTimeInMilliseconds()
}

// returns moment for the first day of month
export function groupTransactionsByMonth(transaction: TransactionEntity): number {
  const date = new Date(transaction.date)
  return new Date(date.getFullYear(), date.getMonth(), 1).getTime()
}
