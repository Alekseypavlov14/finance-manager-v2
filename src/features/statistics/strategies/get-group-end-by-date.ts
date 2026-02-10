import type { StatisticsGroupInterval } from '../types/statistics-group-interval'
import { DAYS_PER_WEEK } from '@/shared/constants'
import { DateTime } from '@oleksii-pavlov/date-time'

export function getGroupEndByDate(interval: StatisticsGroupInterval, date: number): number {
  return ({
    week: getGroupEndForWeekInterval(date),
    month: getGroupEndForMonthInterval(date),
  })[interval]
}

export function getGroupEndForWeekInterval(date: number): number {
  const givenDate = new DateTime(date).normalizeDate()
  return givenDate.getFirstDayOfWeek(1)
    .normalizeDate()
    .getDateTimeAfter({ days: DAYS_PER_WEEK })
    .getDateTimeBefore({ milliseconds: 1 })
    .getTimeInMilliseconds()
}

export function getGroupEndForMonthInterval(date: number): number {
  const { years, months } = new DateTime(date).getTimeData()
  return new DateTime({ years, months: months + 1, days: 1 })
    .getDateTimeBefore({ milliseconds: 1 })
    .getTimeInMilliseconds()
}
