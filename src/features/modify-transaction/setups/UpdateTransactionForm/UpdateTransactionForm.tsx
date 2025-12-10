import { TransactionForm, useTransactionFormData } from '@/features/transaction-form'
import type { TransactionEntity } from '@/entities/transactions'
import { useTransactionActions } from '../../hooks/use-transaction-actions'
import { FormActions } from '@/shared/components/FormActions'
import { Button } from 'antd'
import styles from './UpdateTransactionForm.module.css'

interface UpdateTransactionFormProps {
  transaction: TransactionEntity
}

export function UpdateTransactionForm({ transaction }: UpdateTransactionFormProps) {
  const { updateTransaction, deleteTransaction } = useTransactionActions()
  const transactionFormData = useTransactionFormData()

  return (
    <div className={styles.UpdateTransactionForm}>
      <TransactionForm initialTransactionData={transaction} />

      <FormActions>
        <Button 
          onClick={() => updateTransaction(transaction.id, transactionFormData)}
          type='primary'
        >
          Update transaction
        </Button>

        <Button 
          onClick={() => deleteTransaction(transaction.id)}
          danger
        >
          Delete transaction
        </Button>
      </FormActions>
    </div>
  )
}
