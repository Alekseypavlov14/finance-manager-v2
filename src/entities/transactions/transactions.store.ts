import type { TransactionEntity } from './transaction.entity'
import { transactionsLocalStorage } from './transactions.storage'
import { create } from 'zustand'

export interface TransactionsState {
  transactions: TransactionEntity[]
}

export interface TransactionsActions {
  updateTransactions: (transactions: TransactionEntity[]) => void
}

export interface TransactionsStore extends TransactionsState, TransactionsActions {}

export const useTransactionsStore = create<TransactionsStore>(set => ({
  transactions: transactionsLocalStorage.getValue() ?? [],
  updateTransactions: (transactions) => set(state => ({ ...state, transactions }))
}))

export const transactionsSelector = (store: TransactionsStore) => store.transactions
export const updateTransactionsSelector = (store: TransactionsStore) => store.updateTransactions
