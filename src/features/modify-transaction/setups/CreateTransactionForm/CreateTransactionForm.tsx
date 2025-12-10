import { TransactionForm, useTransactionFormData } from '@/features/transaction-form'
import { useTransactionActions } from '../../hooks/use-transaction-actions'
import { useInitialFormData } from '../../hooks/use-initial-form-data'
import { FormActions } from '@/shared/components/FormActions'
import { Button } from 'antd'
import styles from './CreateTransactionForm.module.css'

export function CreateTransactionForm() {
  const transactionFormData = useTransactionFormData()
  const { createTransaction } = useTransactionActions()

  const initialData = useInitialFormData()

  return (
    <div className={styles.CreateTransactionForm}>
      <TransactionForm initialTransactionData={initialData} />

      <FormActions>
        <Button 
          onChange={() => createTransaction(transactionFormData)}
          type='primary'
        >
          Create transaction
        </Button>
      </FormActions>
    </div>
  )
}
