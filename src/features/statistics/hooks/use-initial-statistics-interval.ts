import { intervalSelector, updateIntervalEndSelector, updateIntervalStartSelector, useStatisticsStore } from '../statistics.store'
import { getInitialStatisticsInterval } from '../utils/get-initial-statistics-interval'
import { useEffect } from 'react'

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
