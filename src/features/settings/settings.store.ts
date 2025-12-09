import { defaultDisplayTransactionsAmount, defaultDisplayTransactionsComments } from './constants'
import { create } from 'zustand'

export interface SettingsState {
  displayTransactionsComments: boolean
  displayTransactionsAmount: number
}

export interface SettingsActions {
  updateDisplayTransactionsComments: (displayTransactionsComments: boolean) => void
  updateDisplayTransactionsAmount: (displayTransactionsAmount: number) => void
}

export interface SettingsStore extends SettingsState, SettingsActions {}

export const useSettingsStore = create<SettingsStore>(set => ({
  displayTransactionsComments: defaultDisplayTransactionsComments,
  displayTransactionsAmount: defaultDisplayTransactionsAmount,

  updateDisplayTransactionsComments: (displayTransactionsComments) => set(state => ({ ...state, displayTransactionsComments })),
  updateDisplayTransactionsAmount: (displayTransactionsAmount) => set(state => ({ ...state, displayTransactionsAmount })),
}))

export const displayTransactionsCommentsSelector = (store: SettingsStore) => store.displayTransactionsComments
export const displayTransactionsAmountSelector = (store: SettingsStore) => store.displayTransactionsAmount
export const updateDisplayTransactionsCommentsSelector = (store: SettingsStore) => store.updateDisplayTransactionsComments
export const updateDisplayTransactionsAmountSelector = (store: SettingsStore) => store.updateDisplayTransactionsAmount
