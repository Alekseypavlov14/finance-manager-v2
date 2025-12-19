import { destinationAmountSelector, destinationCurrencyIdSelector, sourceAmountSelector, sourceCurrencyIdSelector, updateDestinationAmountSelector, updateSourceAmountSelector, useRatesCalculatorStore } from '../rates-calculator.store'
import { useCurrencyRates } from '@/features/currencies-rates'
import { roundAsMoney } from '@/shared/utils/formatters'
import { useEffect } from 'react'

export function useRatesCalculator() {
  const { getCurrencyRateById } = useCurrencyRates()

  const sourceAmount = useRatesCalculatorStore(sourceAmountSelector)
  const destinationAmount = useRatesCalculatorStore(destinationAmountSelector)
  const sourceCurrencyId = useRatesCalculatorStore(sourceCurrencyIdSelector)
  const destinationCurrencyId = useRatesCalculatorStore(destinationCurrencyIdSelector)

  const updateSourceAmount = useRatesCalculatorStore(updateSourceAmountSelector)
  const updateDestinationAmount = useRatesCalculatorStore(updateDestinationAmountSelector)

  useEffect(() => {
    const sourceCurrencyRate = getCurrencyRateById(sourceCurrencyId)
    const destinationCurrencyRate = getCurrencyRateById(destinationCurrencyId)
    if (!sourceCurrencyRate || !destinationCurrencyRate) return updateDestinationAmount(0)

    const newDestinationAmount = sourceAmount / sourceCurrencyRate * destinationCurrencyRate
    updateDestinationAmount(roundAsMoney(newDestinationAmount))
  }, [sourceAmount, sourceCurrencyId, destinationCurrencyId])

  useEffect(() => {
    const sourceCurrencyRate = getCurrencyRateById(sourceCurrencyId)
    const destinationCurrencyRate = getCurrencyRateById(destinationCurrencyId)
    if (!sourceCurrencyRate || !destinationCurrencyRate) return updateSourceAmount(0)

    const newSourceAmount = destinationAmount / destinationCurrencyRate * sourceCurrencyRate
    updateSourceAmount(roundAsMoney(newSourceAmount))
  }, [destinationAmount])
}
