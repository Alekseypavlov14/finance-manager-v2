import type { TransactionsGroupingStrategy } from '../types/transactions-grouping-strategy'
import type { TransactionEntity } from '@/entities/transactions'
import type { TransactionsGroup } from '../types/transactions-group'
import { Collection } from '@oleksii-pavlov/collections'

export interface GetTransactionsGroupsParams {
  transactions: TransactionEntity[]
  groupingMomentSelector: TransactionsGroupingStrategy
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

  const groups = new Collection(Object.values(groupsMap))
    .sortDescendingBy(group => group.groupingMoment)
    .getItems()
    .map(group => ({
      ...group,
      transactions: sortTransactionsAscendingByDate(group.transactions)
    }))
  
  return groups
}

function sortTransactionsAscendingByDate(transactions: TransactionEntity[]) {
  return new Collection(transactions).sortDescendingBy(transaction => transaction.date).getItems()
}
