export function formatAsMoney(value: number): string {
  return value.toFixed(2)
}

export function roundAsMoney(value: number): number {
  return Number(formatAsMoney(value))
}
