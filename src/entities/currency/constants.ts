import type { CurrencyEntity } from './currency.entity'

// most used currencies
export const USD_CURRENCY: CurrencyEntity = {
  id: 1,
  code: 'USD'
}
export const EUR_CURRENCY: CurrencyEntity = {
  id: 2,
  code: 'EUR'
}

export const defaultReferenceCurrency = USD_CURRENCY

// currencies that are preloaded by app
export const initialCurrencies: CurrencyEntity[] = [
  USD_CURRENCY,
  EUR_CURRENCY,
]
