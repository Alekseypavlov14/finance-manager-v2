import type { CurrencyCode } from '@/entities/currency'
import type { Rate } from './rate'

// stores how much is 1 USD in a given currency 
export type RatesRecord = Record<CurrencyCode, Rate>
