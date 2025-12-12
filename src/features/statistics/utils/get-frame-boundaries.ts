import { DateTime } from '@oleksii-pavlov/date-time'

// returns 00:00:00:000 of a given date
export function getIntervalStartByDate(moment: number): number {
  return new DateTime(moment).normalizeDate().getTimeInMilliseconds()
}

// return 23:59:59:999 of a given date
export function getIntervalEndByDate(moment: number): number {
  return new DateTime(moment).normalizeDate().getDateTimeAfter({ days: 1 }).getDateTimeBefore({ milliseconds: 1 }).getTimeInMilliseconds()
}
