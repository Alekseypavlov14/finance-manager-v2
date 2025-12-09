import { create } from 'zustand'
import type { CurrentEntity } from './currency.entity'
import { currenciesLocalStorage } from './currencies.storage'

export interface CurrenciesState {
  currencies: CurrentEntity[]
}

export interface CurrenciesActions {
  updateCurrencies: (currencies: CurrentEntity[]) => void
}

export interface CurrenciesStore extends CurrenciesState, CurrenciesActions {}

export const useCurrenciesStore = create<CurrenciesStore>(set => ({
  currencies: currenciesLocalStorage.getValue() ?? [],
  updateCurrencies: (currencies) => set(state => ({ ...state, currencies })),
}))

export const currenciesSelector = (store: CurrenciesStore) => store.currencies
export const updateCurrencies = (store: CurrenciesStore) => store.updateCurrencies
