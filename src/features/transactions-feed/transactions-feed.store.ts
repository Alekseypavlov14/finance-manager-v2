import type { TransactionsGroupingMode } from './types/transactions-grouping-mode'
import { transactionsGroupingModeWeek } from './constants'
import type { TransactionEntity } from '@/entities/transactions'
import { create } from 'zustand'

export interface TransactionsFeedState {
  displayedTransactions: TransactionEntity[]
  groupingMode: TransactionsGroupingMode
}

export interface TransactionsFeedActions {
  updateDisplayedTransactions: (displayedTransactions: TransactionEntity[]) => void
  updateGroupingMode: (groupingMode: TransactionsGroupingMode) => void
}

export interface TransactionsFeedStore extends TransactionsFeedState, TransactionsFeedActions {}

export const useTransactionsFeedStore = create<TransactionsFeedStore>(set => ({
  displayedTransactions: [],
  groupingMode: transactionsGroupingModeWeek,

  updateDisplayedTransactions: (displayedTransactions) => set(state => ({ ...state, displayedTransactions })),
  updateGroupingMode: (groupingMode) => set(state => ({ ...state, groupingMode })),
}))

export const displayedTransactionsSelector = (store: TransactionsFeedStore) => store.displayedTransactions
export const groupingModeSelector = (store: TransactionsFeedStore) => store.groupingMode

export const updateDisplayedTransactionsSelector = (store: TransactionsFeedStore) => store.updateDisplayedTransactions
export const updateGroupingModeSelector = (store: TransactionsFeedStore) => store.updateGroupingMode
