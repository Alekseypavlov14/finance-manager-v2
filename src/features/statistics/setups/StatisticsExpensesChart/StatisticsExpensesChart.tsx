import { useStatisticsExpensesData } from '../../diagrams/expenses'
import { useDisplayTransactions } from '@/features/display-transaction'
import { StatisticsBlockLabel } from '../../components/StatisticsBlockLabel'
import { StatisticsBlock } from '../../components/StatisticsBlock'
import { BarChartSetup } from '@/features/charts'
import { redColor } from '@/app/theme'

export function StatisticsExpensesChart() {
  const statisticsExpensesData = useStatisticsExpensesData()
  const { formatAmountAsUSD } = useDisplayTransactions()

  return (
    <StatisticsBlock>
      <StatisticsBlockLabel>Expenses</StatisticsBlockLabel>

      <BarChartSetup 
        data={statisticsExpensesData} 
        displayValueKey='Expenses' 
        valueFormatter={formatAmountAsUSD}
        color={redColor} 
        displayYAxis
      />
    </StatisticsBlock>
  )
}
