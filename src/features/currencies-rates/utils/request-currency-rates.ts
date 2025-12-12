import { USD_CURRENCY, type CurrencyCode } from '@/entities/currency'
import { RatesAPIRequestsHTTPClient } from '../api.client'
import type { RatesRecord } from '../types/rates-record'

export async function requestCurrencyRates(rateCodes: CurrencyCode[]): Promise<RatesRecord> {
  const rates: RatesRecord = {}

  await Promise.all(rateCodes.map<Promise<void>>(async (code) => {
    const response = await RatesAPIRequestsHTTPClient.get<any>(`/${USD_CURRENCY.code}-${code}`).catch(() => {})
    if (!response) return

    const responseKey = `${USD_CURRENCY.code}${code}`
    
    const rateMin = Number(response[responseKey]?.low) || 0
    const rateMax = Number(response[responseKey]?.high) || 0
    const rateAverage = ((rateMin + rateMax) / 2) || 0

    rates[code] = rateAverage
  }))

  return rates
}
