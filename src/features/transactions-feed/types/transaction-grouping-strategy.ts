import type { TransactionEntity } from '@/entities/transactions'

export type TransactionGroupingStrategy = (transaction: TransactionEntity) => number
