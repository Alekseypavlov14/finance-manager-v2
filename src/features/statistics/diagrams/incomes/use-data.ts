import type { StatisticsIncomesDataItem } from './data-item'
import { useStatisticApproaches } from '../../hooks/use-statistics-approaches'
import type { TransactionMoney } from '@/entities/transactions'
import { useTransactionsGroups } from '../../hooks/use-transactions-groups'
import { formatDateShort } from '@/shared/utils/datetime'

export function useStatisticsIncomesData() {
  const statisticsGroups = useTransactionsGroups()
  const { getTransactionsTotalAmount } = useStatisticApproaches()

  return statisticsGroups.map<StatisticsIncomesDataItem>(group => {
    const money: TransactionMoney[] = group.transactions.map(transaction => transaction.received)
    const amount = getTransactionsTotalAmount(money)
    
    return ({
      label: formatDateShort(group.end),
      value: amount
    })
  })
}
