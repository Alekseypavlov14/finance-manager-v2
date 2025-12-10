import { LocalStorage } from '@oleksii-pavlov/storages'
import type { CurrencyEntity } from './currency.entity'

export const currenciesLocalStorage = new LocalStorage<CurrencyEntity[]>('entities/currents')
