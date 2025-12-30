import { useStatisticApproaches } from '@/features/statistics'
import type { TransactionsGroup } from '../types/transactions-group'

export function useTransactionsGroupBalance() {
  const { getTransactionsTotalAmount } = useStatisticApproaches()

  function getTransactionsGroupBalance(group: TransactionsGroup) {
    const received = getTransactionsTotalAmount(group.transactions.map(transaction => transaction.received))
    const lost = getTransactionsTotalAmount(group.transactions.map(transaction => transaction.lost))
    return ({ received, lost })
  }

  return ({ 
    getTransactionsGroupBalance
  })
}
