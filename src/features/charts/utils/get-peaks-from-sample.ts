import type { DataDomain } from '../types/data-domain'

export function getPeaksFromSample(data: number[]): DataDomain {
  const min = Math.min(...data, 0)
  const max = Math.max(...data, 0)
  return [ min, max ]
}
