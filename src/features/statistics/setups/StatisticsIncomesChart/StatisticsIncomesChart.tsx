import { useStatisticsIncomesData } from '../../diagrams/incomes'
import { useDisplayTransactions } from '@/features/display-transaction'
import { StatisticsBlockLabel } from '../../components/StatisticsBlockLabel'
import { StatisticsBlock } from '../../components/StatisticsBlock'
import { BarChartSetup } from '@/features/charts'
import { greenColor } from '@/app/theme'

export function StatisticsIncomesChart() {
  const statisticsIncomesData = useStatisticsIncomesData()
  const { formatAmountAsUSD } = useDisplayTransactions()
  
  return (
    <StatisticsBlock>
      <StatisticsBlockLabel>Incomes</StatisticsBlockLabel>

      <BarChartSetup 
        data={statisticsIncomesData} 
        displayValueKey='Incomes' 
        valueFormatter={formatAmountAsUSD}
        color={greenColor} 
        displayYAxis
      />
    </StatisticsBlock>
  )
}
