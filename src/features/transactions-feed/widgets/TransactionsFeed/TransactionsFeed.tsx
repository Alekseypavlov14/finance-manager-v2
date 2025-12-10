import { currentPageSelector, totalPagesSelector, updateCurrentPageSelector } from '@/shared/utils/pagination'
import { useTransactionsFeedPaginationStore } from '../../transactions-feed-pagination.store'
import { TransactionsGroups } from '../../components/TransactionsGroups'
import { Pagination } from 'antd'
import styles from './TransactionsFeed.module.css'

export function TransactionsFeed() {
  const currentPage = useTransactionsFeedPaginationStore(currentPageSelector)
  const totalPages = useTransactionsFeedPaginationStore(totalPagesSelector)

  const updateCurrentPage = useTransactionsFeedPaginationStore(updateCurrentPageSelector)

  return (
    <div className={styles.TransactionsFeed}>
      <TransactionsGroups>
        Groups
      </TransactionsGroups>

      <Pagination 
        current={currentPage}
        total={totalPages}
        onChange={updateCurrentPage}
      />
    </div>
  )
}
