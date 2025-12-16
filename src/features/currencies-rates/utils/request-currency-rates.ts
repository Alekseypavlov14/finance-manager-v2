import { USD_CURRENCY, type CurrencyCode } from '@/entities/currency'
import { RatesAPIRequestsHTTPClient } from '../api.client'
import type { RatesRecord } from '../types/rates-record'
import { average } from '@/shared/utils/math'

export async function requestCurrencyRates(rateCodes: CurrencyCode[]): Promise<RatesRecord> {
  const rates: RatesRecord = {}

  await Promise.all(rateCodes.map<Promise<any>>(async (code) => {
    if (code === USD_CURRENCY.code) {
      return rates[code] = 1
    }
    
    const response = await RatesAPIRequestsHTTPClient.get<any>(`/${USD_CURRENCY.code}-${code}`).catch(() => {})
    if (!response) return

    const responseKey = `${USD_CURRENCY.code}${code}`
    
    const rateMin = Number(response[responseKey]?.low) || 0
    const rateMax = Number(response[responseKey]?.high) || 0
    const rateAverage = average([ rateMin, rateMax ])

    rates[code] = rateAverage
  }))

  return rates
}
