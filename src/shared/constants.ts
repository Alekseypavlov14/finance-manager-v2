import { DateFormatter } from '@oleksii-pavlov/date-time'

export const MILLISECONDS_PER_SECOND = 1000
export const MILLISECONDS_PER_MINUTE = 60 * 1000
export const MILLISECONDS_PER_HOUR = 60 * 60 * 1000
export const MILLISECONDS_PER_DAY = 24 * 60 * 60 * 1000
export const DAYS_PER_WEEK = 7

export const dateFormatter = new DateFormatter()

export const inputValueFormatter = dateFormatter.createFormatter('YYYY-MM-DD')
