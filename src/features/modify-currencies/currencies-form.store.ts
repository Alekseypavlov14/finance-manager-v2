import type { CurrencyData } from '@/entities/currency'
import { type Id } from '@/shared/types/entity'
import { unique } from '@/shared/utils/arrays'
import { create } from 'zustand'

export interface CurrenciesFormState {
  // data for currencies that are currently creating
  creatingCurrencies: CurrencyData[]
  // ids of currencies that are currently updating
  modifyingIds: Id[]
}

export interface CurrenciesFormActions {
  addCreatingCurrency: (data: CurrencyData) => void
  updateCreatingCurrencyCodeByIndex: (index: number, code: string) => void
  removeCreatingCurrencyByIndex: (index: number) => void

  toggleModifyingId: (id: Id) => void
}

export interface CurrenciesFormStore extends CurrenciesFormState, CurrenciesFormActions {}

export const useCurrenciesFormStore = create<CurrenciesFormStore>(set => ({
  creatingCurrencies: [],
  modifyingIds: [],

  addCreatingCurrency: (data) => set(state => ({ ...state, creatingCurrencies: state.creatingCurrencies.concat(data) })),
  updateCreatingCurrencyCodeByIndex: (index, code) => set(state => ({ 
    ...state, 
    creatingCurrencies: state.creatingCurrencies.map((data, currencyIndex) => currencyIndex !== index ? data : Object.assign({}, data, { code })), 
  })),
  removeCreatingCurrencyByIndex: (index) => set(state => ({ ...state, creatingCurrencies: state.creatingCurrencies.filter((_, currencyIndex) => index !== currencyIndex)})),

  toggleModifyingId: (id) => set(state => ({ 
    ...state, 
    modifyingIds: state.modifyingIds.includes(id) 
      ? state.modifyingIds.filter(modifyingId => modifyingId !== id)
      : unique(state.modifyingIds.concat(id)) 
  }))
}))

export const creatingCurrenciesSelector = (store: CurrenciesFormStore) => store.creatingCurrencies
export const modifyingIdsSelector = (store: CurrenciesFormStore) => store.modifyingIds

export const addCreatingCurrencySelector = (store: CurrenciesFormStore) => store.addCreatingCurrency
export const updateCreatingCurrencyCodeByIndexSelector = (store: CurrenciesFormStore) => store.updateCreatingCurrencyCodeByIndex
export const removeCreatingCurrenciesByIndexSelector = (store: CurrenciesFormStore) => store.removeCreatingCurrencyByIndex

export const toggleModifyingIdSelector = (store: CurrenciesFormStore) => store.toggleModifyingId
