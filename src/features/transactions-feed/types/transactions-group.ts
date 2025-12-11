import type { TransactionEntity } from '@/entities/transactions'

export interface TransactionsGroup {
  groupingMoment: number
  transactions: TransactionEntity[]
}
