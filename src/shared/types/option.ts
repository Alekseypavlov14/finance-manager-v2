import type { ReactNode } from 'react'

export interface Option<T> {
  value: T
  label: ReactNode
}
