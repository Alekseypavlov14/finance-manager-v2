import { referenceCurrencyIdSelector, useSettingsStore } from '@/features/settings'
import { defaultTransactionFormData } from '@/features/transaction-form'
import type { TransactionData } from '@/entities/transactions'

export function useInitialFormData(): TransactionData {
  const referenceCurrencyId = useSettingsStore(referenceCurrencyIdSelector)

  return ({
    ...defaultTransactionFormData,

    received: {
      amount: 0,
      currencyId: referenceCurrencyId,
    },
    lost: {
      amount: 0,
      currencyId: referenceCurrencyId
    }
  })
}
