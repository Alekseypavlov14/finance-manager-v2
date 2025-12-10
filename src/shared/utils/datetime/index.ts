import dayjs, { type Dayjs } from 'dayjs'

export function convertDayjsToMilliseconds(date: Dayjs) {
  return dayjs(date).toDate().getTime()
}
