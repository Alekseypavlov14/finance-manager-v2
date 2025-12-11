import { updateDisplayedTransactionsSelector, useTransactionsFeedStore } from '../transactions-feed.store'
import { displayTransactionsAmountSelector, useSettingsStore } from '@/features/settings'
import { transactionsSelector, useTransactionsStore } from '@/entities/transactions'
import { useTransactionsFeedPaginationStore } from '../transactions-feed-pagination.store'
import { currentPageSelector } from '@/shared/utils/pagination'
import { useEffect } from 'react'

export function useSubscribeOnTransactions() {
  const transactions = useTransactionsStore(transactionsSelector)
  const currentPage = useTransactionsFeedPaginationStore(currentPageSelector)

  const displayTransactionsAmount = useSettingsStore(displayTransactionsAmountSelector)

  const updateDisplayedTransactions = useTransactionsFeedStore(updateDisplayedTransactionsSelector)

  useEffect(() => {
    updateDisplayedTransactions(transactions.slice(currentPage * displayTransactionsAmount, (currentPage + 1) * displayTransactionsAmount))
  }, [transactions, currentPage, displayTransactionsAmount])
}
