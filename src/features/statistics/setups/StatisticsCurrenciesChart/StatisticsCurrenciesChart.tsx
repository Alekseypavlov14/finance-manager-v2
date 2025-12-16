import { greenColor, redColor, primaryColor } from '@/app/theme'
import { useStatisticsCurrenciesData } from '../../diagrams/currencies'
import { StatisticsBlockCaption } from '../../components/StatisticsBlockCaption'
import { StatisticsBlockContent } from '../../components/StatisticsBlockContent'
import { useDisplayTransactions } from '@/features/display-transaction'
import { StatisticsBlockLabel } from '../../components/StatisticsBlockLabel'
import { StatisticsBlock } from '../../components/StatisticsBlock'
import { PieChartSetup } from '@/features/charts/setups/PieChartSetup'
import { formatAsMoney } from '@/shared/utils/formatters'
import { USD_CURRENCY } from '@/entities/currency'
import styles from './StatisticsCurrenciesChart.module.css'

export function StatisticsCurrenciesChart() {
  const statisticsCurrenciesData = useStatisticsCurrenciesData()
  const { formatAmountAsUSD } = useDisplayTransactions()
  
  return (
    <StatisticsBlock>
      <StatisticsBlockLabel>Currencies</StatisticsBlockLabel>

      <StatisticsBlockContent>
        <PieChartSetup 
          data={statisticsCurrenciesData}
          valueFormatter={formatAmountAsUSD}
          colors={[ greenColor, redColor, primaryColor ]}
        />

        <StatisticsBlockCaption>
          <div className={styles.Currencies}>
            {statisticsCurrenciesData.map((data, index) => (
              <div className={styles.CurrenciesLine} key={index}>
                <div className={styles.CurrenciesLabel}>{data.label}:</div> 
                <div className={styles.CurrenciesValue}>{formatAsMoney(data.value)} {USD_CURRENCY.code}</div>
              </div>
            ))}

            {statisticsCurrenciesData.length ? null : (
              <div className={styles.CurrenciesFallback}>No data added</div>
            )}
          </div>
        </StatisticsBlockCaption>
      </StatisticsBlockContent>
    </StatisticsBlock>
  )
}
