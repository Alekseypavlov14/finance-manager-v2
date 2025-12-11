import { formatTransactionAmount } from '../utils/format-transaction-amount'
import { useCurrenciesActions } from '@/entities/currency'
import type { Id } from '@/shared/types/entity'

export function useDisplayTransactions() {
  const { getCurrencyById } = useCurrenciesActions()

  function formatAmountWithCurrency(amount: number, currencyId: Id) {
    const currency = getCurrencyById(currencyId)
    if (!currency) return ''

    return `${formatTransactionAmount(amount)} ${currency.label}`
  }

  return ({
    formatAmountWithCurrency
  })
}