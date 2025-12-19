import { USD_CURRENCY } from '@/entities/currency'
import type { Id } from '@/shared/types/entity'
import { create } from 'zustand'

export interface RatesCalculatorState {
  sourceAmount: number
  destinationAmount: number

  sourceCurrencyId: Id
  destinationCurrencyId: Id
}

export interface RatesCalculatorActions {
  updateSourceAmount: (value: number) => void
  updateDestinationAmount: (value: number) => void

  updateSourceCurrencyId: (id: Id) => void
  updateDestinationCurrencyId: (id: Id) => void
}

export interface RatesCalculatorStore extends RatesCalculatorState, RatesCalculatorActions {}

export const useRatesCalculatorStore = create<RatesCalculatorStore>(set => ({
  sourceAmount: 0,
  destinationAmount: 0,

  sourceCurrencyId: USD_CURRENCY.id,
  destinationCurrencyId: USD_CURRENCY.id,

  updateSourceAmount: (sourceAmount) => set(state => ({ ...state, sourceAmount })),
  updateDestinationAmount: (destinationAmount) => set(state => ({ ...state, destinationAmount })),
  
  updateSourceCurrencyId: (sourceCurrencyId) => set(state => ({ ...state, sourceCurrencyId })),
  updateDestinationCurrencyId: (destinationCurrencyId) => set(state => ({ ...state, destinationCurrencyId })),
}))

export const sourceAmountSelector = (store: RatesCalculatorStore) => store.sourceAmount
export const destinationAmountSelector = (store: RatesCalculatorStore) => store.destinationAmount
export const sourceCurrencyIdSelector = (store: RatesCalculatorStore) => store.sourceCurrencyId
export const destinationCurrencyIdSelector = (store: RatesCalculatorStore) => store.destinationCurrencyId

export const updateSourceAmountSelector = (store: RatesCalculatorStore) => store.updateSourceAmount
export const updateDestinationAmountSelector = (store: RatesCalculatorStore) => store.updateDestinationAmount
export const updateSourceCurrencyIdSelector = (store: RatesCalculatorStore) => store.updateSourceCurrencyId
export const updateDestinationCurrencyIdSelector = (store: RatesCalculatorStore) => store.updateDestinationCurrencyId
