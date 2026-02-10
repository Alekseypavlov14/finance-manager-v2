import type { StatisticsGroupInterval } from '../types/statistics-group-interval'
import { DateTime } from '@oleksii-pavlov/date-time'

export function getGroupStartByDate(interval: StatisticsGroupInterval, date: number): number {
  return ({
    week: getGroupStartForWeekInterval(date),
    month: getGroupStartForMonthInterval(date),
  })[interval]
}

// returns monday of a given week
export function getGroupStartForWeekInterval(date: number) {
  const givenDate = new DateTime(date).normalizeDate()
  return givenDate.getFirstDayOfWeek(1).normalizeDate().getTimeInMilliseconds()
}

// returns 1st day of given month
export function getGroupStartForMonthInterval(date: number) {
  const { years, months } = new DateTime(date).normalizeDate().getTimeData()
  return new DateTime({ years, months, days: 1 }).getTimeInMilliseconds()
}
