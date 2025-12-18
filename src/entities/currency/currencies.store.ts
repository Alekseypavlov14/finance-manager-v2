import { currenciesLocalStorage } from './currencies.storage'
import type { CurrencyEntity } from './currency.entity'
import { create } from 'zustand'

export interface CurrenciesState {
  currencies: CurrencyEntity[]
}

export interface CurrenciesActions {
  updateCurrencies: (currencies: CurrencyEntity[]) => void
}

export interface CurrenciesStore extends CurrenciesState, CurrenciesActions {}

export const useCurrenciesStore = create<CurrenciesStore>(set => ({
  currencies: currenciesLocalStorage.getValue() ?? [],
  updateCurrencies: (currencies) => set(state => ({ ...state, currencies })),
}))

export const currenciesSelector = (store: CurrenciesStore) => store.currencies
export const updateCurrenciesSelector = (store: CurrenciesStore) => store.updateCurrencies
