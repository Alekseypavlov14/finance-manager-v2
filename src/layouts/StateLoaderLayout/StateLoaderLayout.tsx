import type { ReactNode } from 'react'
import { useRequestCurrencyRates } from '@/features/currencies-rates'
import { useSettingsPersistence } from '@/features/settings'

interface StateLoaderLayoutProps {
  children: ReactNode
}

export function StateLoaderLayout({ children }: StateLoaderLayoutProps) {
  useRequestCurrencyRates()
  useSettingsPersistence()

  return children
}
