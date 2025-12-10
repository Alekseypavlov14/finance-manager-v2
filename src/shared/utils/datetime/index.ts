import { DateFormatter } from '@oleksii-pavlov/date-time'
import dayjs, { type Dayjs } from 'dayjs'

export function convertDayjsToMilliseconds(date: Dayjs) {
  return dayjs(date).toDate().getTime()
}

export const dateFormatter = new DateFormatter()

export const formatDateShort = dateFormatter.createFormatter('DD MMM')
export const formatDateLong = dateFormatter.createFormatter('DD MMM YYYY')
