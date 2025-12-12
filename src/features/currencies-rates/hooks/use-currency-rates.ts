import { ratesSelector, useRatesStore } from '../rates.store'
import type { CurrencyCode } from '@/entities/currency'

export function useCurrencyRates() {
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
  
  return ({
    getRateByCurrencyPair,
    getCurrencyRate
  })
}
