import { CartesianGrid, Line, LineChart, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { getAdjustedTicks, getBalancedTicksIndexes } from '../../utils/get-adjusted-ticks'
import { getOptimalDataDomainFromSample } from '../../utils/get-optimal-data-domain'
import { primaryColor, textColor } from '@/app/theme'
import { DEFAULT_CHART_HEIGHT } from '../../constants'
import type { DataDomain } from '../../types/data-domain'
import type { DataItem } from '../../types/data-item'
import styles from './LineChartSetup.module.css'

interface LineChartSetupProps {
  data: DataItem[]
  ticksIndexes?: number[]
  dataDomain?: DataDomain
  optimalDataDomain?: boolean

  displayXAxis?: boolean
  displayYAxis?: boolean

  displayHorizontalLines?: boolean
  displayVerticalLines?: boolean

  horizontalReference?: number
  displayHorizontalReferenceLine?: boolean

  tooltipColor?: string
  displayValueKey?: string
  valueFormatter?: (value: number) => string

  height?: number
  color?: string
}

export function LineChartSetup({
  data,
  ticksIndexes = getBalancedTicksIndexes(data.length),
  dataDomain,
  optimalDataDomain,

  displayXAxis = true,
  displayYAxis = false,

  displayHorizontalLines = true,
  displayVerticalLines = false,

  displayHorizontalReferenceLine = true,
  horizontalReference = 0,

  tooltipColor = textColor,
  displayValueKey,
  valueFormatter,

  height = DEFAULT_CHART_HEIGHT,
  color = primaryColor,
}: LineChartSetupProps) {
  const ticks = getAdjustedTicks(data.map(data => data.label), ticksIndexes)
  const domain = optimalDataDomain ? getOptimalDataDomainFromSample(data) : dataDomain

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

        <YAxis 
          dataKey={'value'} 
          domain={domain}
          hide={!displayYAxis}
        />

        {displayHorizontalReferenceLine ? (
          <ReferenceLine y={horizontalReference} />
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
