import type { TransactionGroupingStrategy } from '../types/transaction-grouping-strategy'
import type { TransactionEntity } from '@/entities/transactions'
import type { TransactionsGroup } from '../types/transactions-group'
import { Collection } from '@oleksii-pavlov/collections'

export interface GetTransactionsGroupsParams {
  transactions: TransactionEntity[]
  groupingMomentSelector: TransactionGroupingStrategy
}

export function getTransactionsGroups({
  transactions,
  groupingMomentSelector,
}: GetTransactionsGroupsParams): TransactionsGroup[] {
  const groupsMap: Record<number, TransactionsGroup> = []

  transactions.forEach(transaction => {
    const groupingMoment = groupingMomentSelector(transaction)

    if (!groupsMap[groupingMoment]) groupsMap[groupingMoment] = {
      groupingMoment: groupingMoment,
      transactions: []
    }

    groupsMap[groupingMoment].transactions.push(transaction)
  })

  const groups = Object.values(groupsMap).map(group => ({
    ...group,
    transactions: sortTransactionsAscendingByDate(group.transactions)
  }))
  
  return groups
}

function sortTransactionsAscendingByDate(transactions: TransactionEntity[]) {
  return new Collection(transactions).sortAscendingBy(transaction => transaction.date).getItems()
}
