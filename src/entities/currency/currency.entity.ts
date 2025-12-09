import type { Entity } from '@/shared/types/entity'

export interface CurrencyData {
  label: string
} 

export interface CurrentEntity extends Entity, CurrencyData {}
