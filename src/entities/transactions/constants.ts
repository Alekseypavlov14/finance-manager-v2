import type { TransactionType } from '@/entities/transactions'

export const transactionTypeWithdraw: TransactionType = 'withdraw'
export const transactionTypeDeposit: TransactionType = 'deposit'
export const transactionTypeExchange: TransactionType = 'exchange'

export const defaultTransactionType = transactionTypeWithdraw
