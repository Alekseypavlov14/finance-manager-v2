import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { primaryColor, textColor } from '@/app/theme'
import { DEFAULT_CHART_HEIGHT } from '../../constants'
import type { DataDomain } from '../../types/data-domain'
import type { DataItem } from '../../types/data-item'
import styles from './LineChartSetup.module.css'

interface LineChartSetupProps {
  data: DataItem[]
  dataDomain?: DataDomain

  displayXAxis?: boolean
  displayYAxis?: boolean

  displayHorizontalLines?: boolean
  displayVerticalLines?: boolean

  tooltipColor?: string
  displayValueKey?: string
  valueFormatter?: (value: string) => string

  height?: number
  color?: string
}

export function LineChartSetup({
  data,
  dataDomain,

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
          <XAxis dataKey={'label'} />
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
