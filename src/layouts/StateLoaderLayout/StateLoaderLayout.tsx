import type { ReactNode } from 'react'
import { useInitialStatisticsInterval } from '@/features/statistics'
import { useTransactionsPersistence } from '@/entities/transactions'
import { useCurrenciesPersistence } from '@/entities/currency'
import { useRequestCurrencyRates } from '@/features/currencies-rates'
import { useSettingsPersistence } from '@/features/settings'

interface StateLoaderLayoutProps {
  children: ReactNode
}

export function StateLoaderLayout({ children }: StateLoaderLayoutProps) {
  useRequestCurrencyRates()

  useTransactionsPersistence()
  useCurrenciesPersistence()
  useSettingsPersistence()

  useInitialStatisticsInterval()

  return children
}
