import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts'
import { primaryColor, textColor } from '@/app/theme'
import { DEFAULT_CHART_HEIGHT } from '../../constants'
import type { DataItem } from '../../types/data-item'
import type { DataDomain } from '../../types/data-domain'
import styles from './BarChartSetup.module.css'

interface BarChartSetupProps {
  data: DataItem[]
  dataDomain?: DataDomain

  tooltipLabel?: string
  tooltipColor?: string

  displayValueKey?: string
  valueFormatter?: (value: string) => string

  height?: number
  color?: string
}

export function BarChartSetup({
  data,
  dataDomain,

  tooltipLabel = '',
  tooltipColor = textColor,

  displayValueKey,
  valueFormatter,

  height = DEFAULT_CHART_HEIGHT,
  color = primaryColor,
}: BarChartSetupProps) {
  return (
    <BarChart 
      className={styles.BarChartSetup}
      style={{ width: '100%' }}
      height={height}
      data={data}
      responsive
    >
      <XAxis dataKey={'label'} />
      <YAxis 
        dataKey={'value'} 
        domain={dataDomain}
      />

      <Bar 
        dataKey={'value'} 
        fill={color} 
        name={displayValueKey} 
      />

      <Tooltip
        contentStyle={{ color: tooltipColor }}
        
        labelStyle={{ fontWeight: 500 }}
        labelFormatter={() => tooltipLabel} 

        itemStyle={{ color: tooltipColor }}
        formatter={valueFormatter}
      />
      <CartesianGrid vertical={false} />
    </BarChart>
  )
}
