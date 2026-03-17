import type { TransactionEntity } from '@/entities/transactions'
import { Collection } from '@oleksii-pavlov/collections'

export function sortTransactionsByDate(transactions: TransactionEntity[]): TransactionEntity[] {
  return new Collection(transactions).sortDescendingBy(transaction => transaction.date).getItems()
}
