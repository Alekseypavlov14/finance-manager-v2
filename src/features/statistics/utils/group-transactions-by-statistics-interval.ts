import { getGroupStartByDate } from '../strategies/get-group-start-by-date'
import { getGroupEndByDate } from '../strategies/get-group-end-by-date'
import type { StatisticsGroupInterval } from '../types/statistics-group-interval'
import type { TransactionEntity } from '@/entities/transactions'
import type { StatisticsGroup } from '../types/statistics-group'
import { getNextIntervalByDate } from '../strategies/get-next-group-by-date'
import { Range } from '@oleksii-pavlov/ranges'

export interface GroupTransactionsByStatisticsInterval {
  transactions: TransactionEntity[]
  start: number
  end: number
  interval: StatisticsGroupInterval
}

export function groupTransactionsByStatisticsInterval({ transactions, start, end, interval }: GroupTransactionsByStatisticsInterval): StatisticsGroup[] {
  const groups = getEmptyTransactionsGroups(start, end, interval)

  transactions.forEach(transaction => {
    const group = groups.find(group => {
      return new Range({ min: group.start, max: group.end }).containsValue(transaction.date)
    })

    if (!group) return

    group.transactions.push(transaction)
  })

  return groups
}

function getEmptyTransactionsGroups(start: number, end: number, interval: StatisticsGroupInterval) {
  let currentIntervalStartMoment = getGroupStartByDate(interval, start)
  const computedLastIntervalEndMoment = getGroupEndByDate(interval, end)

  const groups: StatisticsGroup[] = []

  while (currentIntervalStartMoment < computedLastIntervalEndMoment) {
    groups.push({
      transactions: [],
      start: getGroupStartByDate(interval, currentIntervalStartMoment),
      end: getGroupEndByDate(interval, currentIntervalStartMoment),
    })

    currentIntervalStartMoment = getNextIntervalByDate(interval, currentIntervalStartMoment)
  }

  return groups
}
