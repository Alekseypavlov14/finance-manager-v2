import { currenciesSelector, useCurrenciesStore } from '../currencies.store'
import type { CurrencyEntity } from '../currency.entity'
import type { Nullable } from '@/shared/types/nullable'
import type { Id } from '@/shared/types/entity'

export function useCurrenciesActions() {
  const currencies = useCurrenciesStore(currenciesSelector)

  function getCurrencyById(id: Id): Nullable<CurrencyEntity> {
    return currencies.find(currency => currency.id === id) ?? null
  }

  return ({
    getCurrencyById
  })
}
