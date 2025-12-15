import type { DataDomain } from '../types/data-domain'

// returns domain based on data values 
export function getOptimalDataDomain(min: number, max: number, offset: number = 0.1): DataDomain {
  const adjustedMin = min - Math.abs(max - min) * offset
  const adjustedMax = max + Math.abs(max - min) * offset

  return [adjustedMin, adjustedMax]
}
