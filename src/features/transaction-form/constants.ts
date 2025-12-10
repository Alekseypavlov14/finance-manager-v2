import { defaultTransactionType, type TransactionData } from '@/entities/transactions'

// initial state of the transaction form store
export const defaultTransactionFormData: TransactionData = {
  type: defaultTransactionType,
  description: '',

  received: {
    amount: 0,
    currencyId: 0,
  },

  lost: {
    amount: 0,
    currencyId: 0
  },

  date: Date.now(),
}
