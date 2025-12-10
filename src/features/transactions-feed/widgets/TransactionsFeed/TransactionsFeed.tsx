import { Transaction, TransactionAmount, TransactionComment, TransactionDate, TransactionRow } from '@/features/display-transaction'
import { currentPageSelector, totalPagesSelector, updateCurrentPageSelector } from '@/shared/utils/pagination'
import { useTransactionsFeedPaginationStore } from '../../transactions-feed-pagination.store'
import { TransactionsGroupLabel } from '../../components/TransactionsGroupLabel'
import { TransactionsGroupList } from '../../components/TransactionsGroupList'
import { useTransactionsGroups } from '../../hooks/use-transactions-groups'
import { TransactionsGroups } from '../../components/TransactionsGroups'
import { TransactionsGroup } from '../../components/TransactionsGroup'
import { Pagination } from 'antd'
import styles from './TransactionsFeed.module.css'

export function TransactionsFeed() {
  const transactionGroups = useTransactionsGroups()

  const currentPage = useTransactionsFeedPaginationStore(currentPageSelector)
  const totalPages = useTransactionsFeedPaginationStore(totalPagesSelector)

  const updateCurrentPage = useTransactionsFeedPaginationStore(updateCurrentPageSelector)

  return (
    <div className={styles.TransactionsFeed}>
      <TransactionsGroups>
        {transactionGroups.map((group, index) => (
          <TransactionsGroup key={index}>
            <TransactionsGroupLabel>{group.label}</TransactionsGroupLabel>

            <TransactionsGroupList>
              {group.transactions.map(transaction => (
                <Transaction key={transaction.id}>
                  <TransactionRow>
                    <TransactionAmount></TransactionAmount>

                    <TransactionDate></TransactionDate>
                  </TransactionRow>

                  <TransactionRow>
                    <TransactionComment>
                      
                    </TransactionComment>  
                  </TransactionRow>
                </Transaction>
              ))}
            </TransactionsGroupList>
          </TransactionsGroup>
        ))}
      </TransactionsGroups>

      <Pagination 
        current={currentPage}
        total={totalPages}
        onChange={updateCurrentPage}
        hideOnSinglePage
      />
    </div>
  )
}
