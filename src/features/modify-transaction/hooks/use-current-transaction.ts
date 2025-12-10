import { transactionsSelector, useTransactionsStore, type TransactionEntity } from '@/entities/transactions'
import { useTransactionId } from './use-transaction-id'
import type { Nullable } from '@/shared/types/nullable'

export function useCurrentTransaction(): Nullable<TransactionEntity> {
  const transactions = useTransactionsStore(transactionsSelector)
  const id = useTransactionId()

  return transactions.find(transaction => transaction.id === id) ?? null
}
