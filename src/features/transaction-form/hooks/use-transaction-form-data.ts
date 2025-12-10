import type { TransactionData } from '@/entities/transactions'
import { useTransactionFormStore, transactionTypeSelector, transactionDescriptionSelector, transactionReceivedSelector, transactionLostSelector, transactionDateSelector } from '../transaction-form.store'

export function useTransactionFormData(): TransactionData {
  const transactionType = useTransactionFormStore(transactionTypeSelector)
  const transactionDescription = useTransactionFormStore(transactionDescriptionSelector)
  const transactionReceived = useTransactionFormStore(transactionReceivedSelector)
  const transactionLost = useTransactionFormStore(transactionLostSelector)
  const transactionDate = useTransactionFormStore(transactionDateSelector)

  return ({
    type: transactionType,
    description: transactionDescription,

    received: transactionReceived,
    lost: transactionLost,

    date: transactionDate,
  })
}
