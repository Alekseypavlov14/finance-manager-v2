import { currenciesSelector, useCurrenciesStore } from '../currencies.store'
import { currenciesLocalStorage } from '../currencies.storage'
import { useEffect } from 'react'

export function useCurrenciesPersistence() {
  const currencies = useCurrenciesStore(currenciesSelector)

  useEffect(() => {
    currenciesLocalStorage.setValue(currencies)
  }, [currencies])
}
