import type { CurrencyEntity } from '../currency.entity'
import type { Option } from '@/shared/types/option'
import type { Id } from '@/shared/types/entity'

export function getCurrencyOption(currency: CurrencyEntity): Option<Id> {
  return ({
    label: currency.code,
    value: currency.id
  })
}
