import { settingsLocalStorage } from './settings.storage'
import { defaultSettings } from './constants'
import type { Settings } from './types/settings'
import type { Id } from '@/shared/types/entity'
import { create } from 'zustand'  

export interface SettingsState extends Settings {}

export interface SettingsActions {
  updateDisplayTransactionsComments: (displayTransactionsComments: boolean) => void
  updateDisplayTransactionsAmount: (displayTransactionsAmount: number) => void
  updateReferenceCurrencyId: (referenceCurrencyId: Id) => void
}

export interface SettingsStore extends SettingsState, SettingsActions {}

export const useSettingsStore = create<SettingsStore>(set => ({
  ...defaultSettings,
  ...(settingsLocalStorage.getValue() ?? defaultSettings),

  updateDisplayTransactionsComments: (displayTransactionsComments) => set(state => ({ ...state, displayTransactionsComments })),
  updateDisplayTransactionsAmount: (displayTransactionsAmount) => set(state => ({ ...state, displayTransactionsAmount })),
  updateReferenceCurrencyId: (referenceCurrencyId) => set(state => ({ ...state, referenceCurrencyId })),
}))

export const referenceCurrencyIdSelector = (store: SettingsStore) => store.referenceCurrencyId
export const displayTransactionsCommentsSelector = (store: SettingsStore) => store.displayTransactionsComments
export const displayTransactionsAmountSelector = (store: SettingsStore) => store.displayTransactionsAmount

export const updateReferenceCurrencyIdSelector = (store: SettingsStore) => store.updateReferenceCurrencyId
export const updateDisplayTransactionsCommentsSelector = (store: SettingsStore) => store.updateDisplayTransactionsComments
export const updateDisplayTransactionsAmountSelector = (store: SettingsStore) => store.updateDisplayTransactionsAmount
