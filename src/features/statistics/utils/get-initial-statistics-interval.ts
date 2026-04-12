import { defaultStatisticsGroupsAmount } from '../constants'
import type { StatisticsGroupInterval } from '../types/statistics-group-interval'
import { getPreviousIntervalByDate } from '../strategies/get-previous-group-by-date'
import { getGroupStartByDate } from '../strategies/get-group-start-by-date'
import { getGroupEndByDate } from '../strategies/get-group-end-by-date'

export function getInitialStatisticsInterval(interval: StatisticsGroupInterval): [ number, number ] {
  const today = Date.now()

  let intervalStart = getGroupStartByDate(interval, today)
  const intervalEnd = getGroupEndByDate(interval, today)

  for (let i = 1; i < defaultStatisticsGroupsAmount; i++) {
    intervalStart = getPreviousIntervalByDate(interval, intervalStart)
  }

  return [ intervalStart, intervalEnd ]
}