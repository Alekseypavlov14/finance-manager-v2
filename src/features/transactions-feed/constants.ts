import { groupTransactionsByMonth, groupTransactionsByWeek } from './strategies/transactions-groups.strategies'
import type { TransactionGroupingStrategy } from './types/transaction-grouping-strategy'
import type { TransactionsGroupingMode } from './types/transactions-grouping-mode'

export const transactionsGroupingModeWeek: TransactionsGroupingMode = 'week'
export const transactionsGroupingModeMonth: TransactionsGroupingMode = 'month'

export const mapTransactionGroupingModeToStrategy: Record<TransactionsGroupingMode, TransactionGroupingStrategy> = {
  week: groupTransactionsByWeek,
  month: groupTransactionsByMonth,
}
