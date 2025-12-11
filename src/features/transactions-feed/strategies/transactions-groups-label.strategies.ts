import { formatDateLong, formatDateShort } from '@/shared/utils/datetime'
import { DAYS_PER_WEEK } from '@/shared/constants'
import { DateTime } from '@oleksii-pavlov/date-time'

export function formatTransactionsGroupWeekLabel(groupingMoment: number) {
  const start = new DateTime(groupingMoment)
  const end = new DateTime(groupingMoment)
    .getDateTimeAfter({ days: DAYS_PER_WEEK })
    .getDateTimeBefore({ milliseconds: 1 })

  const now = new Date()

  if (start.getTimeData().years === now.getFullYear()) {
    return `${formatDateShort(start.getTimeInMilliseconds())} - ${formatDateShort(end.getTimeInMilliseconds())}`
  } 

  return `${formatDateLong(start.getTimeInMilliseconds())} - ${formatDateLong(end.getTimeInMilliseconds())}`
}

export function formatTransactionsGroupMonthLabel(groupingMoment: number) {
  const start = new DateTime(groupingMoment)
  const end = new DateTime(groupingMoment)
    .getDateTimeAfter({ months: 1 })
    .getDateTimeBefore({ milliseconds: 1 })

  const now = new Date()

  if (start.getTimeData().years === now.getFullYear()) {
    return `${formatDateShort(start.getTimeInMilliseconds())} - ${formatDateShort(end.getTimeInMilliseconds())}`
  } 

  return `${formatDateLong(start.getTimeInMilliseconds())} - ${formatDateLong(end.getTimeInMilliseconds())}`
}
