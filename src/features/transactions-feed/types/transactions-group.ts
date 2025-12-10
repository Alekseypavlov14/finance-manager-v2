import type { TransactionEntity } from '@/entities/transactions'

export interface TransactionsGroup {
  label: string
  transactions: TransactionEntity[]
}
