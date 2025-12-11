import type { TransactionEntity } from '@/entities/transactions'

export type TransactionsGroupingStrategy = (transaction: TransactionEntity) => number
