import { transactionsSelector, useTransactionsStore } from '../transactions.store'
import { transactionsLocalStorage } from '../transactions.storage'
import { useEffect } from 'react'

export function useTransactionsPersistence() {
  const transactions = useTransactionsStore(transactionsSelector)

  useEffect(() => {
    transactionsLocalStorage.setValue(transactions)
  }, [transactions])
}
