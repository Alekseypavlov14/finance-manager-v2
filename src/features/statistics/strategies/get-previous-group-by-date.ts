import type { StatisticsGroupInterval } from '../types/statistics-group-interval'
import { getGroupStartByDate } from './get-group-start-by-date'
import { DateTime } from '@oleksii-pavlov/date-time'

export function getPreviousIntervalByDate(interval: StatisticsGroupInterval, date: number) {
  const dateBeforeInterval = new DateTime(getGroupStartByDate(interval, date))
    .getDateTimeBefore({ days: 1 })
    .normalizeDate()
    .getTimeInMilliseconds() 

  return getGroupStartByDate(interval, dateBeforeInterval)
}
