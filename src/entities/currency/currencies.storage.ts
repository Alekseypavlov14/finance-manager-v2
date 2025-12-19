import type { CurrencyEntity } from './currency.entity'
import { initialCurrencies } from './constants'
import { LocalStorage } from '@oleksii-pavlov/storages'

export const currenciesLocalStorage = new LocalStorage<CurrencyEntity[]>('entities/currencies', initialCurrencies)
