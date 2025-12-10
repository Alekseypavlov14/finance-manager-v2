import type { TransactionData, TransactionMoney, TransactionType } from '@/entities/transactions'
import { defaultTransactionFormData } from './constants'
import { create } from 'zustand'

export interface TransactionFormState extends TransactionData {}

export interface TransactionFormActions {
  updateTransactionType: (transactionType: TransactionType) => void
  updateTransactionDescription: (transactionDescription: string) => void

  updateTransactionReceived: (transactionReceived: TransactionMoney) => void
  updateTransactionLost: (transactionReceived: TransactionMoney) => void

  updateTransactionDate: (transactionDate: number) => void
}

export interface TransactionFormStore extends TransactionFormState, TransactionFormActions {}

export const useTransactionFormStore = create<TransactionFormStore>(set => ({
  ...defaultTransactionFormData,

  updateTransactionType: (transactionType) => set(state => ({ ...state, transactionType })),
  updateTransactionDescription: (transactionDescription) => set(state => ({ ...state, transactionDescription })),

  updateTransactionReceived: (transactionReceived) => set(state => ({ ...state, transactionReceived })),
  updateTransactionLost: (transactionReceived) => set(state => ({ ...state, transactionReceived })),

  updateTransactionDate: (transactionDate) => set(state => ({ ...state, transactionDate })),
}))

export const transactionTypeSelector = (store: TransactionFormStore) => store.type
export const transactionDescriptionSelector = (store: TransactionFormStore) => store.description
export const transactionReceivedSelector = (store: TransactionFormStore) => store.received
export const transactionLostSelector = (store: TransactionFormStore) => store.lost
export const transactionDateSelector = (store: TransactionFormStore) => store.date

export const updateTransactionTypeSelector = (store: TransactionFormStore) => store.updateTransactionType
export const updateTransactionDescriptionSelector = (store: TransactionFormStore) => store.updateTransactionDescription
export const updateTransactionReceivedSelector = (store: TransactionFormStore) => store.updateTransactionReceived
export const updateTransactionLostSelector = (store: TransactionFormStore) => store.updateTransactionLost
export const updateTransactionDateSelector = (store: TransactionFormStore) => store.updateTransactionDate
