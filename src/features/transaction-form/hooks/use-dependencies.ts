import { transactionTypeSelector, updateTransactionLostAmountSelector, updateTransactionReceivedAmountSelector, useTransactionFormStore } from '../transaction-form.store'
import { transactionTypeDeposit, transactionTypeWithdraw } from '@/entities/transactions'
import { useEffect } from 'react'

export function useDependencies() {
  const transactionType = useTransactionFormStore(transactionTypeSelector)
  
  const updateTransactionReceivedAmount = useTransactionFormStore(updateTransactionReceivedAmountSelector)
  const updateTransactionLostAmount = useTransactionFormStore(updateTransactionLostAmountSelector)

  useEffect(() => {
    if (transactionType === transactionTypeDeposit) return updateTransactionLostAmount(0)
    if (transactionType === transactionTypeWithdraw) return updateTransactionReceivedAmount(0)
  }, [transactionType])
} 
