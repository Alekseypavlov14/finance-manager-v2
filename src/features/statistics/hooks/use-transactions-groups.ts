import { intervalEndSelector, intervalStartSelector, intervalStepSelector, transactionsSelector, useStatisticsStore } from '../statistics.store'
import { groupTransactionsByStatisticsFrame } from '../utils/group-transactions-by-statistics-frame'

export function useTransactionsGroups() {
  const transactions = useStatisticsStore(transactionsSelector)
  const intervalStart = useStatisticsStore(intervalStartSelector)
  const intervalEnd = useStatisticsStore(intervalEndSelector)
  const intervalStep = useStatisticsStore(intervalStepSelector)

  const groups = groupTransactionsByStatisticsFrame({
    transactions: transactions,
    start: intervalStart,
    end: intervalEnd,
    step: intervalStep
  })

  return groups
}
