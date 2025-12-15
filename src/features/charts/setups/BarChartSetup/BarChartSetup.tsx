import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts'
import { primaryColor, textColor } from '@/app/theme'
import { DEFAULT_CHART_HEIGHT } from '../../constants'
import type { DataItem } from '../../types/data-item'
import type { DataDomain } from '../../types/data-domain'
import styles from './BarChartSetup.module.css'

interface BarChartSetupProps {
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

export function BarChartSetup({
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
}: BarChartSetupProps) {
  return (
    <BarChart 
      className={styles.BarChartSetup}
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
