import { intervalSelector, updateIntervalEndSelector, updateIntervalStartSelector, useStatisticsStore } from '../statistics.store'
import { defaultStatisticsGroupsAmount } from '../constants'
import type { StatisticsGroupInterval } from '../types/statistics-group-interval'
import { getPreviousIntervalByDate } from '../strategies/get-previous-group-by-date'
import { getGroupStartByDate } from '../strategies/get-group-start-by-date'
import { getGroupEndByDate } from '../strategies/get-group-end-by-date'
import { useEffect } from 'react'

// sets default interval for N groups with last occupying today
// N is defaultStatisticsGroupsAmount
export function useInitialStatisticsInterval() {
  const interval = useStatisticsStore(intervalSelector)
  const [ start, end ] = getInitialStatisticsInterval(interval)

  const updateIntervalStart = useStatisticsStore(updateIntervalStartSelector)
  const updateIntervalEnd = useStatisticsStore(updateIntervalEndSelector)

  useEffect(() => {
    updateIntervalStart(start)
    updateIntervalEnd(end)
  }, [])
}

function getInitialStatisticsInterval(interval: StatisticsGroupInterval): [ number, number ] {
  const today = Date.now()

  let intervalStart = getGroupStartByDate(interval, today)
  const intervalEnd = getGroupEndByDate(interval, today)

  for (let i = 1; i < defaultStatisticsGroupsAmount; i++) {
    intervalStart = getPreviousIntervalByDate(interval, intervalStart)
  }

  return [ intervalStart, intervalEnd ]
}

