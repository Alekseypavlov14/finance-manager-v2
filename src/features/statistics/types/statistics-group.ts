import type { TransactionEntity } from '@/entities/transactions'

export interface StatisticsGroup {
  transactions: TransactionEntity[]
  start: number
  end: number
}
