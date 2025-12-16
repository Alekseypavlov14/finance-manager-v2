import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { getAdjustedTicks, getBalancedTicksIndexes } from '../../utils/get-adjusted-ticks'
import { primaryColor, textColor } from '@/app/theme'
import { DEFAULT_CHART_HEIGHT } from '../../constants'
import type { DataDomain } from '../../types/data-domain'
import type { DataItem } from '../../types/data-item'
import styles from './LineChartSetup.module.css'

interface LineChartSetupProps {
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

export function LineChartSetup({
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
}: LineChartSetupProps) {
  const ticks = getAdjustedTicks(data.map(data => data.label), ticksIndexes)

  return (
    <ResponsiveContainer height={height}>
      <LineChart 
        className={styles.LineChartSetup}
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
  
        <Line 
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
      </LineChart>
    </ResponsiveContainer>
  )
}
