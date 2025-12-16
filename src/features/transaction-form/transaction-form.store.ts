import type { TransactionData, TransactionMoney, TransactionType } from '@/entities/transactions'
import { defaultTransactionFormData } from './constants'
import type { Id } from '@/shared/types/entity'
import { create } from 'zustand'

export interface TransactionFormState extends TransactionData {}

export interface TransactionFormActions {
  updateTransactionType: (transactionType: TransactionType) => void
  updateTransactionDescription: (transactionDescription: string) => void

  updateTransactionReceived: (transactionReceived: TransactionMoney) => void
  updateTransactionReceivedAmount: (amount: number) => void
  updateTransactionReceivedCurrencyId: (currencyId: Id) => void

  updateTransactionLost: (transactionReceived: TransactionMoney) => void
  updateTransactionLostAmount: (amount: number) => void
  updateTransactionLostCurrencyId: (currencyId: Id) => void

  updateTransactionDate: (transactionDate: number) => void
}

export interface TransactionFormStore extends TransactionFormState, TransactionFormActions {}

export const useTransactionFormStore = create<TransactionFormStore>(set => ({
  ...defaultTransactionFormData,

  updateTransactionType: (transactionType) => set(state => ({ ...state, type: transactionType })),
  updateTransactionDescription: (transactionDescription) => set(state => ({ ...state, description: transactionDescription })),

  updateTransactionReceived: (transactionReceived) => set(state => ({ ...state, received: transactionReceived })),
  updateTransactionReceivedAmount: (amount) => set(state => ({ ...state, received: { amount, currencyId: state.received.currencyId }})),
  updateTransactionReceivedCurrencyId: (currencyId) => set(state => ({ ...state, received: { amount: state.received.amount, currencyId: currencyId }})),

  updateTransactionLost: (transactionLost) => set(state => ({ ...state, lost: transactionLost })),
  updateTransactionLostAmount: (amount) => set(state => ({ ...state, lost: { amount, currencyId: state.lost.currencyId }})),
  updateTransactionLostCurrencyId: (currencyId) => set(state => ({ ...state, lost: { amount: state.lost.amount, currencyId: currencyId }})),
  
  updateTransactionDate: (transactionDate) => set(state => ({ ...state, date: transactionDate })),
}))

export const transactionTypeSelector = (store: TransactionFormStore) => store.type
export const transactionDescriptionSelector = (store: TransactionFormStore) => store.description
export const transactionReceivedSelector = (store: TransactionFormStore) => store.received
export const transactionLostSelector = (store: TransactionFormStore) => store.lost
export const transactionDateSelector = (store: TransactionFormStore) => store.date

export const updateTransactionTypeSelector = (store: TransactionFormStore) => store.updateTransactionType
export const updateTransactionDescriptionSelector = (store: TransactionFormStore) => store.updateTransactionDescription
export const updateTransactionReceivedSelector = (store: TransactionFormStore) => store.updateTransactionReceived
export const updateTransactionReceivedAmountSelector = (store: TransactionFormStore) => store.updateTransactionReceivedAmount
export const updateTransactionReceivedCurrencyIdSelector = (store: TransactionFormStore) => store.updateTransactionReceivedCurrencyId
export const updateTransactionLostSelector = (store: TransactionFormStore) => store.updateTransactionLost
export const updateTransactionLostAmountSelector = (store: TransactionFormStore) => store.updateTransactionLostAmount
export const updateTransactionLostCurrencyIdSelector = (store: TransactionFormStore) => store.updateTransactionLostCurrencyId
export const updateTransactionDateSelector = (store: TransactionFormStore) => store.updateTransactionDate
