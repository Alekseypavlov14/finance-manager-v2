import { currenciesSelector, useCurrenciesStore } from '@/entities/currency'
import { updateRatesSelector, useRatesStore } from '../rates.store'
import { requestCurrencyRates } from '../utils/request-currency-rates'
import { useEffect } from 'react'

export function useRequestCurrencyRates() {
  const currencies = useCurrenciesStore(currenciesSelector)
  const updateRates = useRatesStore(updateRatesSelector)

  useEffect(() => {
    const currencyCodes = currencies.map(currency => currency.code)

    requestCurrencyRates(currencyCodes).then(rates => {
      updateRates(rates)
    })
  }, [currencies])
}
