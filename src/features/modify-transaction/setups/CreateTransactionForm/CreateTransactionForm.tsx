import { TransactionForm, useTransactionFormData } from '@/features/transaction-form'
import { useTransactionsActions } from '@/entities/transactions'
import { useInitialFormData } from '../../hooks/use-initial-form-data'
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

  return (
    <div className={styles.CreateTransactionForm}>
      <TransactionForm initialTransactionData={initialData} />

      <FormActions>
        <Button 
          onClick={() => {
            createTransaction(transactionFormData)
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
