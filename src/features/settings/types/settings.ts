import type { Id } from '@/shared/types/entity'

export interface Settings {
  referenceCurrencyId: Id,

  displayTransactionsComments: boolean
  displayTransactionsAmount: number
}
