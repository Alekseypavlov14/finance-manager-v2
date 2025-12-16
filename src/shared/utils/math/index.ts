export function sum(values: number[]) {
  return values.reduce((total, current) => total + current, 0)
}

export function average(values: number[]) {
  if (!values.length) return 0
  return sum(values) / values.length
}

export function clamp(min: number, value: number, max: number) {
  if (value >= max) return max
  if (value <= min) return min
  return value
}
