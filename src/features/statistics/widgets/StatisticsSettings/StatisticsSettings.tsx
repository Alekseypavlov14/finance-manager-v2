import { intervalEndSelector, intervalSelector, intervalStartSelector, updateIntervalEndSelector, updateIntervalSelector, updateIntervalStartSelector, useStatisticsStore } from '../../statistics.store'
import type { StatisticsGroupInterval } from '../../types/statistics-group-interval'
import { convertDayjsToMilliseconds } from '@/shared/utils/datetime'
import { statisticsGroupIntervals } from '../../constants'
import { DatePicker, Select } from 'antd'
import type { Option } from '@/shared/types/option'
import styles from './StatisticsSettings.module.css'
import dayjs from 'dayjs'

export function StatisticsSettings() {
  const intervalStart = useStatisticsStore(intervalStartSelector)
  const intervalEnd = useStatisticsStore(intervalEndSelector)
  const intervalDuration = useStatisticsStore(intervalSelector)

  const updateIntervalStart = useStatisticsStore(updateIntervalStartSelector)
  const updateIntervalEnd = useStatisticsStore(updateIntervalEndSelector)
  const updateIntervalDuration = useStatisticsStore(updateIntervalSelector)

  const intervalDurationOptions = statisticsGroupIntervals.map<Option<StatisticsGroupInterval>>(interval => ({
    value: interval,
    label: interval,
  }))

  return (
    <div className={styles.StatisticsSettings}>
      <div className={styles.IntervalBoundaries}>
        <DatePicker 
          value={dayjs(intervalStart)} 
          onChange={(date) => date && updateIntervalStart(convertDayjsToMilliseconds(date))}  
          className={styles.Control}
        />
  
        <DatePicker 
          value={dayjs(intervalEnd)} 
          onChange={(date) => date && updateIntervalEnd(convertDayjsToMilliseconds(date))}  
          className={styles.Control}
        />
      </div>

      <Select 
        options={intervalDurationOptions}
        onChange={value => updateIntervalDuration(value)}
        value={intervalDuration}
      />
    </div>
  )
}
