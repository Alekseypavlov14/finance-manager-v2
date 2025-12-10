import { transactionsSelector, updateTransactionsSelector, useTransactionsStore, type TransactionData, type TransactionEntity } from '@/entities/transactions'
import { generateId } from '@/shared/utils/id'
import type { Id } from '@/shared/types/entity'

export function useTransactionActions() {
  const transactions = useTransactionsStore(transactionsSelector)
  const updateTransactions = useTransactionsStore(updateTransactionsSelector)

  function createTransaction(data: TransactionData) {
    const newTransaction: TransactionEntity = {
      ...data,
      id: generateId(),
    }

    const newTransactions = transactions.concat([ newTransaction ])
    updateTransactions(newTransactions)
  } 

  function updateTransaction(id: Id, data: TransactionData) {
    const transaction = transactions.find(transaction => transaction.id === id)
    if (!transaction) return

    const newTransaction: TransactionEntity = { id, ...data }

    const newTransactions = transactions.concat([ newTransaction ])
    updateTransactions(newTransactions)
  }

  return ({
    createTransaction,
    updateTransaction,
  })
}
