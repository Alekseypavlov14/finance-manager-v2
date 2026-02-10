import type { StatisticsGroupInterval } from './types/statistics-group-interval'
import { greenColor, primaryColor, redColor, yellowColor } from '@/app/theme'

export const defaultStatisticsInterval: StatisticsGroupInterval = 'week'
export const defaultStatisticsGroupsAmount = 10

export const colorSequence: string[] = [ greenColor, redColor, yellowColor, primaryColor ]
