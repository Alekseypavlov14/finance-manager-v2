import type { StatisticsGroupInterval } from './types/statistics-group-interval'
import type { TransactionEntity } from '@/entities/transactions'
import { defaultStatisticsInterval } from './constants'
import { create } from 'zustand'

export interface StatisticsState {
  transactions: TransactionEntity[]
  
  intervalStart: number
  intervalEnd: number

  interval: StatisticsGroupInterval
}

export interface StatisticsActions {
  updateTransactions: (transactions: TransactionEntity[]) => void
  updateIntervalStart: (intervalStart: number) => void
  updateIntervalEnd: (intervalEnd: number) => void
  updateInterval: (interval: StatisticsGroupInterval) => void
}

export interface StatisticsStore extends StatisticsState, StatisticsActions {}

export const useStatisticsStore = create<StatisticsStore>(set => ({
  transactions: [],
  intervalStart: Date.now(),
  intervalEnd: Date.now(),
  interval: defaultStatisticsInterval,

  updateTransactions: (transactions) => set(state => ({ ...state, transactions })),
  updateIntervalStart: (intervalStart) => set(state => ({ ...state, intervalStart })),
  updateIntervalEnd: (intervalEnd) => set(state => ({ ...state, intervalEnd })),
  updateInterval: (interval) => set(state => ({ ...state, interval })),
}))

export const transactionsSelector = (store: StatisticsStore) => store.transactions
export const intervalStartSelector = (store: StatisticsStore) => store.intervalStart
export const intervalEndSelector = (store: StatisticsStore) => store.intervalEnd
export const intervalSelector = (store: StatisticsStore) => store.interval

export const updateTransactionsSelector = (store: StatisticsStore) => store.updateTransactions
export const updateIntervalStartSelector = (store: StatisticsStore) => store.updateIntervalStart
export const updateIntervalEndSelector = (store: StatisticsStore) => store.updateIntervalEnd
export const updateIntervalSelector = (store: StatisticsStore) => store.updateInterval
