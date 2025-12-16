import { LineChartSetup, getOptimalDataDomain, getPeaksFromSample } from '@/features/charts'
import { useStatisticsBalanceData } from '../../diagrams/balance'
import { useDisplayTransactions } from '@/features/display-transaction'
import { StatisticsBlockLabel } from '../../components/StatisticsBlockLabel'
import { StatisticsBlock } from '../../components/StatisticsBlock'
import { primaryColor } from '@/app/theme'

export function StatisticsBalanceChart() {
  const statisticsBalanceData = useStatisticsBalanceData()
  const { formatAmountAsUSD } = useDisplayTransactions()

  return (
    <StatisticsBlock>
      <StatisticsBlockLabel>Balance</StatisticsBlockLabel>
      
      <LineChartSetup 
        data={statisticsBalanceData}
        displayValueKey='Balance'
        valueFormatter={formatAmountAsUSD}
        dataDomain={getOptimalDataDomain(...getPeaksFromSample(statisticsBalanceData.map(data => data.value)))}
        color={primaryColor}
        displayYAxis
      />
    </StatisticsBlock>
  )
}
