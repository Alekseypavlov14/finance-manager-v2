import type { Entity } from '@/shared/types/entity'

export type CurrencyCode = string

export interface CurrencyData {
  code: CurrencyCode
} 

export interface CurrencyEntity extends Entity, CurrencyData {}
