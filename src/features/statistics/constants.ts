import { greenColor, primaryColor, redColor, yellowColor } from '@/app/theme'
import type { StatisticsGroupInterval } from './types/statistics-group-interval'

export const statisticGroupIntervalWeek = 'week'
export const statisticGroupIntervalMonth = 'month'

export const defaultStatisticsInterval: StatisticsGroupInterval = statisticGroupIntervalWeek
export const defaultStatisticsGroupsAmount = 10

export const colorSequence: string[] = [ greenColor, redColor, yellowColor, primaryColor ]

export const statisticsGroupIntervals: StatisticsGroupInterval[] = [
  statisticGroupIntervalWeek,
  statisticGroupIntervalMonth,
]
