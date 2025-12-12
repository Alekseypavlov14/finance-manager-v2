import { defaultStatisticsEndDate, defaultStatisticsIntervalStep, defaultStatisticsStartDate } from './constants'
import { getIntervalEndByDate, getIntervalStartByDate } from './utils/get-frame-boundaries'
import type { TransactionEntity } from '@/entities/transactions'
import { create } from 'zustand'

export interface StatisticsState {
  transactions: TransactionEntity[]
  
  // boundaries of analyzing time interval
  intervalStart: number
  intervalEnd: number
  // step for analyzing groups
  intervalStep: number
}

export interface StatisticsActions {
  updateTransactions: (transactions: TransactionEntity[]) => void
  updateIntervalStart: (intervalStart: number) => void
  updateIntervalEnd: (intervalEnd: number) => void
  updateIntervalStep: (intervalStep: number) => void
}

export interface StatisticsStore extends StatisticsState, StatisticsActions {}

export const useStatisticsStore = create<StatisticsStore>(set => ({
  transactions: [],
  intervalStart: getIntervalStartByDate(defaultStatisticsStartDate.getTimeInMilliseconds()),
  intervalEnd: getIntervalEndByDate(defaultStatisticsEndDate.getTimeInMilliseconds()),
  intervalStep: defaultStatisticsIntervalStep,

  updateTransactions: (transactions) => set(state => ({ ...state, transactions })),
  updateIntervalStart: (intervalStart) => set(state => ({ ...state, intervalStart })),
  updateIntervalEnd: (intervalEnd) => set(state => ({ ...state, intervalEnd })),
  updateIntervalStep: (intervalStep) => set(state => ({ ...state, intervalStep })),
}))

export const transactionsSelector = (store: StatisticsStore) => store.transactions
export const intervalStartSelector = (store: StatisticsStore) => store.intervalStart
export const intervalEndSelector = (store: StatisticsStore) => store.intervalEnd
export const intervalStepSelector = (store: StatisticsStore) => store.intervalStep

export const updateTransactionsSelector = (store: StatisticsStore) => store.updateTransactions
export const updateIntervalStartSelector = (store: StatisticsStore) => store.updateIntervalStart
export const updateIntervalEndSelector = (store: StatisticsStore) => store.updateIntervalEnd
export const updateIntervalStepSelector = (store: StatisticsStore) => store.updateIntervalStep
