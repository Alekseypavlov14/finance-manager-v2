export function getAdjustedTicks(ticks: string[], indexes: number[]): string[] {
  return ticks.map((tick, index) => indexes.includes(index) ? tick : '')
}

export function getBalancedTicksIndexes(ticksAmount: number): number[] {
  const middleIndex = Math.floor(ticksAmount / 2)
  const shownIndexes = [1, middleIndex, ticksAmount - 2]
  return shownIndexes
}
