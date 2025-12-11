import type { Entity, Id } from '@/shared/types/entity'

export interface TransactionMoney {
  currencyId: Id
  amount: number
}

export type TransactionType = 'withdraw' | 'deposit' | 'exchange'

export interface TransactionData {
  type: TransactionType
  description: string

  received: TransactionMoney
  lost: TransactionMoney

  date: number
}

export interface TransactionEntity extends Entity, TransactionData {}
