import type { StatisticsGroupInterval } from '../types/statistics-group-interval'
import { getGroupEndByDate } from './get-group-end-by-date'
import { DateTime } from '@oleksii-pavlov/date-time'

export function getNextIntervalByDate(interval: StatisticsGroupInterval, date: number) {
  return new DateTime(getGroupEndByDate(interval, date))
    .getDateTimeAfter({ days: 1 })
    .normalizeDate()
    .getTimeInMilliseconds()
}
