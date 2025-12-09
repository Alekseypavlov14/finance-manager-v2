import type { Entity, Id } from '@/shared/types/entity'
import type { Nullable } from '@/shared/types/nullable'

export interface TransactionMoney {
  currencyId: Nullable<Id>
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
