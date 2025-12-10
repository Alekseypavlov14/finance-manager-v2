import type { TransactionType } from '@/entities/transactions'

export const transactionTypeWithdraw: TransactionType = 'withdraw'
export const transactionTypeDeposit: TransactionType = 'deposit'
export const transactionTypeExchange: TransactionType = 'exchange'

export const defaultTransactionType = transactionTypeWithdraw

export const transactionTypes = [
  transactionTypeWithdraw,
  transactionTypeDeposit,
  transactionTypeExchange,
]

export const receivingTransactionTypes: TransactionType[] = [ transactionTypeDeposit, transactionTypeExchange ]
export const losingTransactionTypes: TransactionType[] = [ transactionTypeWithdraw, transactionTypeExchange ]
