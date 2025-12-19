import { transactionsSelector, useTransactionsStore } from '@/entities/transactions'
import type { StatisticsCurrenciesDataItem } from './data-item'
import { useCurrenciesActions } from '@/entities/currency'
import { useCurrencyRates } from '@/features/currencies-rates'
import type { Nullable } from '@/shared/types/nullable'
import type { Id } from '@/shared/types/entity'
import { sum } from '@/shared/utils/math'

export function useStatisticsCurrenciesData() {
  const transactions = useTransactionsStore(transactionsSelector)
  const { getCurrencyById } = useCurrenciesActions()
  const { getCurrencyRate } = useCurrencyRates()

  const currencyIds: Id[] = Array.from(new Set(transactions.map(transaction => [
    transaction.received.currencyId, 
    transaction.lost.currencyId
  ]).flat()))

  const currenciesGroups: StatisticsCurrenciesDataItem[] = currencyIds.map<Nullable<StatisticsCurrenciesDataItem>>(currencyId => {
    const currency = getCurrencyById(currencyId)
    if (!currency) return null

    const rate = getCurrencyRate(currency.code)
    if (!rate) return null

    const receivedTransactions = transactions.filter(transaction => transaction.received.currencyId === currencyId)
    const lostTransactions = transactions.filter(transaction => transaction.lost.currencyId === currencyId)

    const receivedAmount = sum(receivedTransactions.map(transaction => transaction.received.amount))
    const lostAmount = sum(lostTransactions.map(transaction => transaction.lost.amount))

    const currencyBalance = receivedAmount - lostAmount
    const currencyAmountInUSD = currencyBalance / rate

    return ({
      value: currencyAmountInUSD,
      real: currencyBalance,
      label: currency.code,
    })
  }).filter(Boolean) as StatisticsCurrenciesDataItem[]

  return currenciesGroups
}
