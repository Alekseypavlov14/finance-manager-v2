import { useTransactionsActions, type TransactionEntity } from '@/entities/transactions'
import { TransactionForm, useTransactionFormData } from '@/features/transaction-form'
import { useNotifications } from '@/app/notifications'
import { FormActions } from '@/shared/components/FormActions'
import { Button } from 'antd'
import styles from './UpdateTransactionForm.module.css'

interface UpdateTransactionFormProps {
  transaction: TransactionEntity
  onSave?: () => void 
  onDelete?: () => void
}

export function UpdateTransactionForm({ 
  transaction,
  onSave = () => {}, 
  onDelete = () => {},
}: UpdateTransactionFormProps) {
  const { updateTransaction, deleteTransaction } = useTransactionsActions()
  const transactionFormData = useTransactionFormData()

  const { createSuccessNotification } = useNotifications()

  return (
    <div className={styles.UpdateTransactionForm}>
      <TransactionForm initialTransactionData={transaction} />

      <FormActions>
        <Button 
          onClick={() => {
            updateTransaction(transaction.id, transactionFormData)
            createSuccessNotification('Transaction is updated')
            onSave()
          }}
          type='primary'
        >
          Update transaction
        </Button>

        <Button 
          onClick={() => {
            deleteTransaction(transaction.id)
            onDelete()
          }}
          danger
        >
          Delete transaction
        </Button>
      </FormActions>
    </div>
  )
}
