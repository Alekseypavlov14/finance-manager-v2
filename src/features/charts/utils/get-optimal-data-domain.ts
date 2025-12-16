import { DEFAULT_DOMAIN_STEP, DEFAULT_OFFSET } from '../constants'
import type { DataDomain } from '../types/data-domain'
import { round } from '@/shared/utils/math'

// returns domain based on data values 
export function getOptimalDataDomain(min: number, max: number, step: number = DEFAULT_DOMAIN_STEP, offset: number = DEFAULT_OFFSET): DataDomain {
  const adjustedMin = min - Math.abs(max - min) * offset
  const adjustedMax = max + Math.abs(max - min) * offset

  const roundedMin = round(adjustedMin, step)
  const roundedMax = round(adjustedMax, step)

  return [roundedMin, roundedMax]
}
