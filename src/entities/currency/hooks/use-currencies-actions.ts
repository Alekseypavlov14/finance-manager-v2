import { currenciesSelector, updateCurrenciesSelector, useCurrenciesStore } from '../currencies.store'
import type { CurrencyData, CurrencyEntity } from '../currency.entity'
import type { Nullable } from '@/shared/types/nullable'
import { generateId } from '@/shared/utils/id'
import type { Id } from '@/shared/types/entity'

export function useCurrenciesActions() {
  const currencies = useCurrenciesStore(currenciesSelector)
  const updateCurrencies = useCurrenciesStore(updateCurrenciesSelector)

  function getCurrencyById(id: Id): Nullable<CurrencyEntity> {
    return currencies.find(currency => currency.id === id) ?? null
  }

  function createCurrency(data: CurrencyData) {
    const newCurrency: CurrencyEntity = { id: generateId(), ...data }
    const newCurrencies = currencies.concat(newCurrency)
    updateCurrencies(newCurrencies)
    return newCurrency
  }

  function updateCurrencyById(id: Id, data: Partial<CurrencyData> = {}) {
    const currency = currencies.find(currency => currency.id === id)
    const index = currencies.findIndex(currency => currency.id === id)
    if (!currency) return

    const newCurrency = Object.assign({}, currency, data)
    
    const newCurrencies = [...currencies]
    newCurrencies[index] = newCurrency
    updateCurrencies(newCurrencies)

    return newCurrency
  }

  function deleteCurrencyById(id: Id) {
    const newCurrencies = currencies.filter(currency => currency.id !== id)
    updateCurrencies(newCurrencies)
  }

  return ({
    getCurrencyById,
    createCurrency,
    updateCurrencyById,
    deleteCurrencyById,
  })
}
