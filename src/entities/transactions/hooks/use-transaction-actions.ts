import { transactionsLocalStorage, transactionsSelector, updateTransactionsSelector, useTransactionsStore, type TransactionData, type TransactionEntity } from '@/entities/transactions'
import { generateId } from '@/shared/utils/id'
import { useEffect } from 'react'
import type { Nullable } from '@/shared/types/nullable'
import type { Id } from '@/shared/types/entity'

export function useTransactionsActions() {
  const transactions = useTransactionsStore(transactionsSelector)
  const updateTransactions = useTransactionsStore(updateTransactionsSelector)

  // operations are persistent
  useEffect(() => transactionsLocalStorage.setValue(transactions), [transactions])

  function getTransactionById(id: Id): Nullable<TransactionEntity> {
    return transactions.find(transaction => transaction.id === id) ?? null
  }

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

    const oldTransactions = transactions.filter(transaction => transaction.id !== id)
    const newTransactions = oldTransactions.concat([ newTransaction ])
    updateTransactions(newTransactions)
  }

  function deleteTransaction(id: Id) {
    const newTransactions = transactions.filter(transaction => transaction.id !== id)
    updateTransactions(newTransactions)
  }

  return ({
    getTransactionById,
    createTransaction,
    updateTransaction,
    deleteTransaction,
  })
}
