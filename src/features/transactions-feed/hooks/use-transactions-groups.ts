import { displayedTransactionsSelector, groupingModeSelector, useTransactionsFeedStore } from '../transactions-feed.store'
import { mapTransactionGroupingModeToStrategy } from '../constants'
import { getTransactionsGroups } from '../utils/get-transactions-groups'
import type { TransactionsGroup } from '../types/transactions-group'

export function useTransactionsGroups(): TransactionsGroup[] {
  const displayedTransactions = useTransactionsFeedStore(displayedTransactionsSelector)
  const transactionsGroupingMode = useTransactionsFeedStore(groupingModeSelector)

  const groups = getTransactionsGroups({
    transactions: displayedTransactions,
    groupingMomentSelector: mapTransactionGroupingModeToStrategy[transactionsGroupingMode],
  })

  return groups
}
