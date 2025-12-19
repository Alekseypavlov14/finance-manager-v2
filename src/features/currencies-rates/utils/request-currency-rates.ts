import { USD_CURRENCY, type CurrencyCode } from '@/entities/currency'
import { RatesAPIRequestsHTTPClient } from '../api.client'
import type { RatesRecord } from '../types/rates-record'
import { average } from '@/shared/utils/math'

export async function requestCurrencyRates(rateCodes: CurrencyCode[]): Promise<RatesRecord> {
  const rates: RatesRecord = {}

  await Promise.all(rateCodes.map<Promise<any>>(async (code) => {
    if (code === USD_CURRENCY.code) return rates[code] = 1

    const rate = await requestCurrencyRate(code).catch(() => 0)
    rates[code] = rate
  }))

  return rates
}

async function requestCurrencyRate(code: CurrencyCode) {
  const responseUSDToCurrency = await requestUSDToCurrency(code)
  if (responseUSDToCurrency) return responseUSDToCurrency

  const responseCurrencyToUSD = await requestCurrencyToUSD(code)
  if (responseCurrencyToUSD) return responseCurrencyToUSD

  return 0
}

async function requestUSDToCurrency(code: CurrencyCode): Promise<number> {
  const response = await RatesAPIRequestsHTTPClient.get<any>(`/${USD_CURRENCY.code}-${code}`).catch(() => null)
  if (!response) return 0
  
  const responseKey = `${USD_CURRENCY.code}${code}`
  const rate = getRateFromResponse(response, responseKey)

  return rate
}

async function requestCurrencyToUSD(code: CurrencyCode): Promise<number> {
  const response = await RatesAPIRequestsHTTPClient.get<any>(`/${code}-${USD_CURRENCY.code}`).catch(() => null)
  if (!response) return 0

  const responseKey = `${code}${USD_CURRENCY.code}`
  const rate = 1 / getRateFromResponse(response, responseKey)

  return rate 
}

function getRateFromResponse(response: any, key: string) {
  const rateMin = Number(response[key]?.low) || 0
  const rateMax = Number(response[key]?.high) || 0

  const rateAverage = average([ rateMin, rateMax ])
  return rateAverage
}
