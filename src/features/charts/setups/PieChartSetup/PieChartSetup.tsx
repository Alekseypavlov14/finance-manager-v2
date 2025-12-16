import { Cell, Pie, PieChart, Tooltip } from 'recharts'
import { DEFAULT_CHART_HEIGHT } from '../../constants'
import type { DataItem } from '../../types/data-item'
import { textColor } from '@/app/theme'
import styles from './PieChartSetup.module.css'

interface PieChartSetupProps {
  data: DataItem[]

  tooltipColor?: string
  valueFormatter?: (value: number) => string

  height?: number
  colors?: string[]
}

export function PieChartSetup({
  data,

  tooltipColor = textColor,
  valueFormatter,

  height = DEFAULT_CHART_HEIGHT,
  colors = [],
}: PieChartSetupProps) {
  return (
    <PieChart 
      className={styles.PieChartSetup}
      height={height}
      data={data}
      responsive
    >
      <Pie
        dataKey={'value'}
        nameKey='label'

        innerRadius={45}
        outerRadius={60}
        
        startAngle={90}
        endAngle={-270}
        
        animationBegin={0}
      >
        {data.map((_, index) => (
          <Cell 
            fill={colors[index % colors.length]} 
            style={{ outline: 'none' }}
            key={index} 
          />
        ))}
      </Pie>

      <Tooltip
        contentStyle={{ color: tooltipColor }}  
        labelStyle={{ fontWeight: 500 }}
        cursor={{ opacity: 0.3 }}

        itemStyle={{ color: tooltipColor }}
        formatter={valueFormatter}
      />
    </PieChart>
  )
}
