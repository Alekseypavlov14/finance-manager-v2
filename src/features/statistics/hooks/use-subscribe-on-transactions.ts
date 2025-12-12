import { intervalEndSelector, intervalStartSelector, updateTransactionsSelector, useStatisticsStore } from '../statistics.store'
import { useTransactionsStore, transactionsSelector } from '@/entities/transactions'
import { useEffect } from 'react'
import { Range } from '@oleksii-pavlov/ranges'

export function useSubscribeOnTransactions() {
  const transactions = useTransactionsStore(transactionsSelector)

  const updateTransactions = useStatisticsStore(updateTransactionsSelector)
  const intervalStart = useStatisticsStore(intervalStartSelector)
  const intervalEnd = useStatisticsStore(intervalEndSelector)

  useEffect(() => {
    const range = new Range({ min: intervalStart, max: intervalEnd })
    updateTransactions(transactions.filter(transaction => range.containsValue(transaction.date)))
  }, [transactions, intervalStart, intervalEnd, ])
}
