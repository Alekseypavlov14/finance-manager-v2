import { LocalStorage } from '@oleksii-pavlov/storages'
import type { CurrentEntity } from './currency.entity'

export const currenciesLocalStorage = new LocalStorage<CurrentEntity[]>('entities/currents')
