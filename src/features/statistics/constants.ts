import { greenColor, primaryColor, redColor, yellowColor } from '@/app/theme'
import { DAYS_PER_WEEK, MILLISECONDS_PER_DAY } from '@/shared/constants'
import { DateTime } from '@oleksii-pavlov/date-time'

export const defaultStatisticsIntervalStep = MILLISECONDS_PER_DAY * DAYS_PER_WEEK
export const defaultStatisticsGroupsAmount = 10

export const defaultStatisticsStartDate = new DateTime().normalizeDate().getDateTimeBefore({ 
  milliseconds: defaultStatisticsIntervalStep * defaultStatisticsGroupsAmount 
})
export const defaultStatisticsEndDate = new DateTime().normalizeDate()

export const colorSequence: string[] = [ greenColor, redColor, yellowColor, primaryColor ]
