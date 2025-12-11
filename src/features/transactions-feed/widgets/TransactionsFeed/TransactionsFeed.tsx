import { formatTransactionDate, Transaction, TransactionAmount, TransactionComment, TransactionDate, TransactionRow, useDisplayTransactions } from '@/features/display-transaction'
import { currentPageSelector, totalPagesSelector, updateCurrentPageSelector } from '@/shared/utils/pagination'
import { displayTransactionsCommentsSelector, useSettingsStore } from '@/features/settings'
import { losingTransactionTypes, receivingTransactionTypes } from '@/entities/transactions'
import { groupingModeSelector, useTransactionsFeedStore } from '../../transactions-feed.store'
import { mapTransactionGroupingModeToLabelStrategy } from '../../constants'
import { useTransactionsFeedPaginationStore } from '../../transactions-feed-pagination.store'
import { useSubscribeOnTransactions } from '../../hooks/use-subscribe-on-transactions'
import { TransactionsGroupLabel } from '../../components/TransactionsGroupLabel'
import { TransactionsGroupList } from '../../components/TransactionsGroupList'
import { useTransactionsGroups } from '../../hooks/use-transactions-groups'
import { TransactionsGroups } from '../../components/TransactionsGroups'
import { TransactionsGroup } from '../../components/TransactionsGroup'
import { Placeholder } from '@/shared/components/Placeholder'
import { Pagination } from 'antd'
import styles from './TransactionsFeed.module.css'

export function TransactionsFeed() {
  useSubscribeOnTransactions()

  const transactionGroups = useTransactionsGroups()
  const { formatAmountWithCurrency } = useDisplayTransactions()

  const currentPage = useTransactionsFeedPaginationStore(currentPageSelector)
  const totalPages = useTransactionsFeedPaginationStore(totalPagesSelector)

  const updateCurrentPage = useTransactionsFeedPaginationStore(updateCurrentPageSelector)

  const transactionsGroupingMode = useTransactionsFeedStore(groupingModeSelector)
  const labelFormatter = mapTransactionGroupingModeToLabelStrategy[transactionsGroupingMode]

  const displayTransactionsComments = useSettingsStore(displayTransactionsCommentsSelector)

  return (
    <div className={styles.TransactionsFeed}>
      <TransactionsGroups>
        {transactionGroups.map((group, index) => (
          <TransactionsGroup key={index}>
            <TransactionsGroupLabel>{labelFormatter(group.groupingMoment)}</TransactionsGroupLabel>

            <TransactionsGroupList>
              {group.transactions.map(transaction => (
                <Transaction key={transaction.id}>
                  <TransactionRow>
                    <TransactionAmount>
                      {receivingTransactionTypes.includes(transaction.type) ? (
                        <span className={styles.Receiving}>{formatAmountWithCurrency(transaction.received.amount, transaction.received.currencyId)}</span>
                      ) : null}
                      {losingTransactionTypes.includes(transaction.type) ? (
                        <span className={styles.Losing}>{formatAmountWithCurrency(transaction.lost.amount, transaction.lost.currencyId)}</span>
                      ) : null}
                    </TransactionAmount>

                    <TransactionDate>
                      {formatTransactionDate(transaction.date)}
                    </TransactionDate>
                  </TransactionRow>

                  {displayTransactionsComments ? (
                    <TransactionRow>
                      <TransactionComment>
                        {transaction.description}
                      </TransactionComment>  
                    </TransactionRow>
                  ) : null}
                </Transaction>
              ))}
            </TransactionsGroupList>
          </TransactionsGroup>
        ))}

        {!transactionGroups.length ? (
          <Placeholder>No transactions created</Placeholder>
        ) : null}
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
