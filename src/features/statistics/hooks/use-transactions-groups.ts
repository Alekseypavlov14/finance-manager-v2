import { intervalEndSelector, intervalStartSelector, intervalSelector, transactionsSelector, useStatisticsStore } from '../statistics.store'
import { groupTransactionsByStatisticsInterval } from '../utils/group-transactions-by-statistics-interval'

export function useTransactionsGroups() {
  const transactions = useStatisticsStore(transactionsSelector)
  const intervalStart = useStatisticsStore(intervalStartSelector)
  const intervalEnd = useStatisticsStore(intervalEndSelector)
  const interval = useStatisticsStore(intervalSelector)

  const groups = groupTransactionsByStatisticsInterval({
    transactions: transactions,
    start: intervalStart,
    end: intervalEnd,
    interval: interval
  })

  return groups
}
