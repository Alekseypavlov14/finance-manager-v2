import { useTransactionsActions, type TransactionEntity } from '@/entities/transactions'
import { useTransactionId } from './use-transaction-id'
import type { Nullable } from '@/shared/types/nullable'

export function useCurrentTransaction(): Nullable<TransactionEntity> {
  const { getTransactionById } = useTransactionsActions()
  const id = useTransactionId()

  return id ? getTransactionById(id) : null
}
