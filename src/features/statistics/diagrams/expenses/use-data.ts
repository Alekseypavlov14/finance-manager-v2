import type { StatisticsIncomesDataItem } from '../incomes/data-item'
import type { TransactionMoney } from '@/entities/transactions'
import { useStatisticApproaches } from '../../hooks/use-statistics-approaches'
import { useTransactionsGroups } from '../../hooks/use-transactions-groups'
import { formatDateShort } from '@/shared/utils/datetime'

export function useStatisticsExpensesData() {
  const statisticsGroups = useTransactionsGroups()
  const { getTransactionsTotalAmount } = useStatisticApproaches()

  return statisticsGroups.map<StatisticsIncomesDataItem>(group => {
    const money: TransactionMoney[] = group.transactions.map(transaction => transaction.lost)
    const amount = getTransactionsTotalAmount(money)
    
    return ({
      label: formatDateShort(group.end),
      value: amount
    })
  })
}
