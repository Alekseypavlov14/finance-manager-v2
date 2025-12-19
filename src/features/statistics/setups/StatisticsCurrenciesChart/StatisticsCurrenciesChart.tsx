import { useStatisticsCurrenciesData } from '../../diagrams/currencies'
import { StatisticsBlockContent } from '../../components/StatisticsBlockContent'
import { useDisplayTransactions } from '@/features/display-transaction'
import { StatisticsBlockLabel } from '../../components/StatisticsBlockLabel'
import { StatisticsBlock } from '../../components/StatisticsBlock'
import { formatAsMoney } from '@/shared/utils/formatters'
import { PieChartSetup } from '@/features/charts/setups/PieChartSetup'
import { colorSequence } from '../../constants'
import { USD_CURRENCY } from '@/entities/currency'
import styles from './StatisticsCurrenciesChart.module.css'
import clsx from 'clsx'

export function StatisticsCurrenciesChart() {
  const { groups, total } = useStatisticsCurrenciesData()
  const { formatAmountAsUSD } = useDisplayTransactions()

  return (
    <StatisticsBlock>
      <StatisticsBlockLabel>Currencies</StatisticsBlockLabel>

      <StatisticsBlockContent>
        <PieChartSetup 
          data={groups}
          valueFormatter={formatAmountAsUSD}
          colors={colorSequence}
        />
      </StatisticsBlockContent>

      <StatisticsBlockContent>
        <div className={styles.Currencies}>
          {groups.map((data, index) => (
            <div className={styles.CurrenciesLine} key={index}>
              <div className={styles.CurrenciesLabel}>{data.label}:</div> 

              <div className={styles.CurrenciesValue}>
                {formatAsMoney(data.real)}&nbsp;{data.label} 
              </div>
              
              <div className={styles.CurrenciesValue}>
                {formatAsMoney(data.value)}&nbsp;{USD_CURRENCY.code} 
              </div>
            </div>
          ))}

          {groups.length ? (
            <div className={clsx(styles.CurrenciesLine, styles.Total)}>
              <div className={styles.CurrenciesLabel}>Total:</div> 

              <div className={styles.CurrenciesValue}></div>

              <div className={styles.CurrenciesValue}>
                <strong>{formatAsMoney(total)}&nbsp;{USD_CURRENCY.code}</strong>
              </div>
            </div>
          ) : null}

          {groups.length ? null : (
            <div className={styles.CurrenciesFallback}>No data added</div>
          )}
        </div>
      </StatisticsBlockContent>
    </StatisticsBlock>
  )
}
