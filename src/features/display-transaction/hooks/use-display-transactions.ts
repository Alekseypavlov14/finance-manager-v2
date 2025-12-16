import { USD_CURRENCY, useCurrenciesActions } from '@/entities/currency'
import { formatTransactionAmount } from '../utils/format-transaction-amount'
import { formatAsMoney } from '@/shared/utils/formatters'
import type { Id } from '@/shared/types/entity'

export function useDisplayTransactions() {
  const { getCurrencyById } = useCurrenciesActions()

  function formatAmountWithCurrency(amount: number, currencyId: Id) {
    const currency = getCurrencyById(currencyId)
    if (!currency) return ''

    return `${formatTransactionAmount(amount)} ${currency.code}`
  }

  function formatAmountAsUSD(amount: number) {
    return `${formatAsMoney(amount)} ${USD_CURRENCY.code}`
  }

  return ({
    formatAmountAsUSD,
    formatAmountWithCurrency,
  })
}