import type { TransactionEntity } from '@/entities/transactions'
import { create } from 'zustand'

export interface TransactionsFeedState {
  displayedTransactions: TransactionEntity[]
}

export interface TransactionsFeedActions {
  updateDisplayedTransactions: (displayedTransactions: TransactionEntity[]) => void
}

export interface TransactionsFeedStore extends TransactionsFeedState, TransactionsFeedActions {}

export const useTransactionsFeedStore = create<TransactionsFeedStore>(set => ({
  displayedTransactions: [],
  updateDisplayedTransactions: (displayedTransactions) => set(state => ({ ...state, displayedTransactions })),
}))

export const displayedTransactionsSelector = (store: TransactionsFeedStore) => store.displayedTransactions
export const updateDisplayedTransactionsSelector = (store: TransactionsFeedStore) => store.updateDisplayedTransactions
