import { currenciesSelector, useCurrenciesStore, type CurrencyCode } from '@/entities/currency'
import { ratesSelector, useRatesStore } from '../rates.store'
import type { Id } from '@/shared/types/entity'

export function useCurrencyRates() {
  const currencies = useCurrenciesStore(currenciesSelector)
  const rates = useRatesStore(ratesSelector)

  // returns how much is 1 unit of currency1 in currency2
  function getRateByCurrencyPair(currencyFromCode: CurrencyCode, currencyToCode: CurrencyCode) {
    const currencyFromRate = rates[currencyFromCode]
    if (!currencyFromRate || currencyFromRate === 0) return 0

    const currencyToRate = rates[currencyToCode]
    if (!currencyToRate || currencyToRate === 0) return 0

    return currencyToRate / currencyFromRate    
  }

  function getCurrencyRate(currencyCode: CurrencyCode) {
    return rates[currencyCode]
  }

  function getCurrencyRateById(id: Id) {
    const currency = currencies.find(currency => currency.id === id)
    if (!currency) return 0

    return rates[currency.code] ?? 0
  }
  
  return ({
    getRateByCurrencyPair,
    getCurrencyRate,
    getCurrencyRateById,
  })
}
