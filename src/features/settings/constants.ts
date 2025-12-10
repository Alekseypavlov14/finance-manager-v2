import { defaultReferenceCurrency } from '@/entities/currency'
import type { Settings } from './types/settings'

export const defaultSettings: Settings = {
  referenceCurrencyId: defaultReferenceCurrency.id,

  displayTransactionsComments: true,
  displayTransactionsAmount: 100,
}
