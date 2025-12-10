import { useTransactionFormStore, updateTransactionTypeSelector, updateTransactionDescriptionSelector, updateTransactionReceivedSelector, updateTransactionLostSelector, updateTransactionDateSelector } from '../transaction-form.store'
import type { TransactionData } from '@/entities/transactions'
import { useEffect } from 'react'

export function useLoadInitialData(initialData: TransactionData) {
  const updateTransactionType = useTransactionFormStore(updateTransactionTypeSelector)
  const updateTransactionDescription = useTransactionFormStore(updateTransactionDescriptionSelector)
  const updateTransactionReceived = useTransactionFormStore(updateTransactionReceivedSelector)
  const updateTransactionLost = useTransactionFormStore(updateTransactionLostSelector)
  const updateTransactionDate = useTransactionFormStore(updateTransactionDateSelector)

  useEffect(() => {
    updateTransactionType(initialData.type)
    updateTransactionDescription(initialData.description)

    updateTransactionReceived(initialData.received)
    updateTransactionLost(initialData.lost)

    updateTransactionDate(initialData.date)
  }, [initialData])
}
