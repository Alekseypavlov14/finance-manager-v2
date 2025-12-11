import { DateFormatter } from '@oleksii-pavlov/date-time'
import { DAYS_PER_WEEK } from '@/shared/constants'
import dayjs, { type Dayjs } from 'dayjs'

export function convertDayjsToMilliseconds(date: Dayjs) {
  return dayjs(date).toDate().getTime()
}

export const dateFormatter = new DateFormatter()

export const formatDateShort = dateFormatter.createFormatter('DD MMM')
export const formatDateLong = dateFormatter.createFormatter('DD MMM YYYY')

// converts day-of-week starting from Sunday to day-of-week-starting from Monday
export function getDayOfWeekStartingFromMonday(standardDayOfWeek: number) {
  return (standardDayOfWeek - 1 + DAYS_PER_WEEK) % DAYS_PER_WEEK
}
