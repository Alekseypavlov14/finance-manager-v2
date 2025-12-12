import type { TransactionEntity } from '@/entities/transactions'
import type { StatisticsGroup } from '../types/statistics-group'
import { Range } from '@oleksii-pavlov/ranges'
import { clamp } from '@/shared/utils/clamp'

export interface GroupTransactionsByStatisticsFrameParams {
  transactions: TransactionEntity[]
  start: number
  end: number
  step: number
}

export function groupTransactionsByStatisticsFrame({ transactions, start, end, step }: GroupTransactionsByStatisticsFrameParams) {
  const groupsAmount = Math.ceil(Math.abs(end - start) / step)
  
  // create groups by given frame
  const groups: StatisticsGroup[] = new Array(groupsAmount).fill(null).map<StatisticsGroup>((_, index) => ({
    transactions: [],
    start: clamp(start, start + step * index, end),
    end: clamp(start, start + step * (index + 1) - 1, end), // -1 is added to prevent overlaps of two groups
  }))

  // put transactions to corresponding groups
  transactions.forEach(transaction => {
    const group = groups.find(group => {
      const range = new Range({ min: group.start, max: group.end })
      return range.containsValue(transaction.date)
    })
    if (!group) return

    group.transactions.push(transaction)
  })

  return groups
}
