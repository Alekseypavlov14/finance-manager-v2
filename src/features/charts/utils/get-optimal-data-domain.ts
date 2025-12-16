import { DEFAULT_DOMAIN_STEP, DEFAULT_OFFSET } from '../constants'
import { getPeaksFromSample } from './get-peaks-from-sample'
import type { DataDomain } from '../types/data-domain'
import type { DataItem } from '../types/data-item'
import { round } from '@/shared/utils/math'

// get optimal domain from a passed data sample
export function getOptimalDataDomainFromSample(data: DataItem[]): DataDomain {
  return getOptimalDataDomain(getPeaksFromSample(data.map(data => data.value)))
}

// returns domain based on data values 
export function getOptimalDataDomain(domain: DataDomain, step: number = DEFAULT_DOMAIN_STEP, offset: number = DEFAULT_OFFSET): DataDomain {
  const [ min, max ] = domain  

  const adjustedMin = min - Math.abs(max - min) * offset
  const adjustedMax = max + Math.abs(max - min) * offset

  const roundedMin = round(adjustedMin, step)
  const roundedMax = round(adjustedMax, step)

  return [roundedMin, roundedMax]
}
