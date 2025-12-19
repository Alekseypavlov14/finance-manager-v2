import { TransactionForm, useTransactionFormData } from '@/features/transaction-form'
import { useTransactionsActions } from '@/entities/transactions'
import { useInitialFormData } from '../../hooks/use-initial-form-data'
import { useNotifications } from '@/app/notifications'
import { FormActions } from '@/shared/components/FormActions'
import { Button } from 'antd'
import styles from './CreateTransactionForm.module.css'

export interface CreateTransactionFormProps {
  onSave?: () => void
}

export function CreateTransactionForm({ onSave = () => {} }: CreateTransactionFormProps) {
  const transactionFormData = useTransactionFormData()
  const { createTransaction } = useTransactionsActions()

  const initialData = useInitialFormData()

  const { createSuccessNotification } = useNotifications()

  return (
    <div className={styles.CreateTransactionForm}>
      <TransactionForm initialTransactionData={initialData} />

      <FormActions>
        <Button 
          onClick={() => {
            createTransaction(transactionFormData)
            createSuccessNotification('Transaction is created')
            onSave()
          }}
          type='primary'
        >
          Create transaction
        </Button>
      </FormActions>
    </div>
  )
}
