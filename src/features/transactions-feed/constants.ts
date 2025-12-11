import { formatTransactionsGroupMonthLabel, formatTransactionsGroupWeekLabel } from './strategies/transactions-groups-label.strategies'
import { groupTransactionsByMonth, groupTransactionsByWeek } from './strategies/transactions-groups.strategies'
import type { TransactionsGroupsLabelStrategy } from './types/transactions-group-label.strategy'
import type { TransactionsGroupingStrategy } from './types/transactions-grouping-strategy'
import type { TransactionsGroupingMode } from './types/transactions-grouping-mode'

export const transactionsGroupingModeWeek: TransactionsGroupingMode = 'week'
export const transactionsGroupingModeMonth: TransactionsGroupingMode = 'month'

export const mapTransactionGroupingModeToStrategy: Record<TransactionsGroupingMode, TransactionsGroupingStrategy> = {
  week: groupTransactionsByWeek,
  month: groupTransactionsByMonth,
}

export const mapTransactionGroupingModeToLabelStrategy: Record<TransactionsGroupingMode, TransactionsGroupsLabelStrategy> = {
  week: formatTransactionsGroupWeekLabel,
  month: formatTransactionsGroupMonthLabel,
}