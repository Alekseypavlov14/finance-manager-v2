import type { CurrencyCode } from '@/entities/currency'
import type { RatesRecord } from './types/rates-record'
import type { Rate } from './types/rate'
import { create } from 'zustand'

export interface RatesState {
  rates: RatesRecord
}

export interface RatesActions {
  updateRates: (rates: RatesRecord) => void
  updateRate: (currencyCode: CurrencyCode, rate: Rate) => void
}

export interface RatesStore extends RatesState, RatesActions {}

export const useRatesStore = create<RatesStore>(set => ({
  rates: {},
  updateRates: (rates) => set(state => ({ ...state, rates })),
  updateRate: (currencyCode, rate) => set(state => ({ ...state, rates: Object.assign({}, state.rates, { [currencyCode]: rate } )}))
}))

export const ratesSelector = (store: RatesStore) => store.rates
export const updateRatesSelector = (store: RatesStore) => store.updateRates
export const updateRateSelector = (store: RatesStore) => store.updateRate
