import { settingsLocalStorage } from './settings.storage'
import { defaultSettings } from './constants'
import type { Settings } from './types/settings'
import { create } from 'zustand'

export interface SettingsState extends Settings {}

export interface SettingsActions {
  updateDisplayTransactionsComments: (displayTransactionsComments: boolean) => void
  updateDisplayTransactionsAmount: (displayTransactionsAmount: number) => void
}

export interface SettingsStore extends SettingsState, SettingsActions {}

export const useSettingsStore = create<SettingsStore>(set => ({
  ...(settingsLocalStorage.getValue() ?? defaultSettings),

  updateDisplayTransactionsComments: (displayTransactionsComments) => set(state => ({ ...state, displayTransactionsComments })),
  updateDisplayTransactionsAmount: (displayTransactionsAmount) => set(state => ({ ...state, displayTransactionsAmount })),
}))

export const displayTransactionsCommentsSelector = (store: SettingsStore) => store.displayTransactionsComments
export const displayTransactionsAmountSelector = (store: SettingsStore) => store.displayTransactionsAmount
export const updateDisplayTransactionsCommentsSelector = (store: SettingsStore) => store.updateDisplayTransactionsComments
export const updateDisplayTransactionsAmountSelector = (store: SettingsStore) => store.updateDisplayTransactionsAmount
