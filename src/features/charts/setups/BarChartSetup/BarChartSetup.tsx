import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts'
import { getAdjustedTicks, getBalancedTicksIndexes } from '../../utils/get-adjusted-ticks'
import { primaryColor, textColor } from '@/app/theme'
import { DEFAULT_CHART_HEIGHT } from '../../constants'
import type { DataDomain } from '../../types/data-domain'
import type { DataItem } from '../../types/data-item'
import styles from './BarChartSetup.module.css'

interface BarChartSetupProps {
  data: DataItem[]
  dataDomain?: DataDomain
  ticksIndexes?: number[]

  displayXAxis?: boolean
  displayYAxis?: boolean

  displayHorizontalLines?: boolean
  displayVerticalLines?: boolean

  tooltipColor?: string
  displayValueKey?: string
  valueFormatter?: (value: number) => string

  height?: number
  color?: string
}

export function BarChartSetup({
  data,
  dataDomain,
  ticksIndexes = getBalancedTicksIndexes(data.length),

  displayXAxis = true,
  displayYAxis = false,

  displayHorizontalLines = true,
  displayVerticalLines = false,

  tooltipColor = textColor,
  displayValueKey,
  valueFormatter,

  height = DEFAULT_CHART_HEIGHT,
  color = primaryColor,
}: BarChartSetupProps) {
  const ticks = getAdjustedTicks(data.map(data => data.label), ticksIndexes)

  return (
    <BarChart 
      className={styles.BarChartSetup}
      data={data}
      
      margin={{ left: -15, top: 5 }}
      height={height}
      responsive
    >
      {displayXAxis ? (
        <XAxis 
          padding={{ left: 10, right: 10 }} 
          dataKey={'label'}
          ticks={ticks}
        />
      ) : null}

      {displayYAxis ? (
        <YAxis 
          dataKey={'value'} 
          domain={dataDomain}
        />
      ) : null}

      <Bar 
        dataKey={'value'} 
        fill={color} 
        name={displayValueKey} 
      />

      <Tooltip
        contentStyle={{ color: tooltipColor }}  
        labelStyle={{ fontWeight: 500 }}
        cursor={{ opacity: 0.3 }}

        itemStyle={{ color: tooltipColor }}
        formatter={valueFormatter}
      />

      <CartesianGrid
        horizontal={displayHorizontalLines}
        vertical={displayVerticalLines}
      />
    </BarChart>
  )
}
