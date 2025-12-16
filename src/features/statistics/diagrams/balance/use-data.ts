import { transactionsSelector, useTransactionsStore } from '@/entities/transactions'
import { intervalStartSelector, useStatisticsStore } from '../../statistics.store'
import type { StatisticsBalanceDataItem } from './data-item'
import { useStatisticApproaches } from '../../hooks/use-statistics-approaches'
import { useTransactionsGroups } from '../../hooks/use-transactions-groups'
import { formatDateShort } from '@/shared/utils/datetime'
import { sum } from '@/shared/utils/math'

export function useStatisticsBalanceData() {
  const transactions = useTransactionsStore(transactionsSelector)
  const statisticsStart = useStatisticsStore(intervalStartSelector)

  const statisticsGroups = useTransactionsGroups()
  const { getTransactionsTotalAmount } = useStatisticApproaches()

  // get data about transactions before the analyzing interval
  const transactionsBeforeGroup = transactions.filter(transaction => transaction.date < statisticsStart)
  const totalReceivedAmount = getTransactionsTotalAmount(transactionsBeforeGroup.map(transaction => transaction.received))
  const totalLostAmount = getTransactionsTotalAmount(transactionsBeforeGroup.map(transaction => transaction.lost))
  const transactionsBeforeGroupAmount = totalReceivedAmount - totalLostAmount

  const groupAmounts = statisticsGroups.map(group => {
    const groupReceivedAmount = getTransactionsTotalAmount(group.transactions.map(transaction => transaction.received))
    const groupLostAmount = getTransactionsTotalAmount(group.transactions.map(transaction => transaction.lost))
    return groupReceivedAmount - groupLostAmount
  })

  return statisticsGroups.map<StatisticsBalanceDataItem>((group, index) => {
    const amount = transactionsBeforeGroupAmount + sum(groupAmounts.slice(0, index + 1))

    return ({
      label: `${formatDateShort(group.start)} - ${formatDateShort(group.end)}`,
      value: amount,
    })
  })
}
