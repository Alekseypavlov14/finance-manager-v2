import { destinationAmountSelector, destinationCurrencyIdSelector, sourceAmountSelector, sourceCurrencyIdSelector, updateDestinationAmountSelector, updateDestinationCurrencyIdSelector, updateSourceAmountSelector, updateSourceCurrencyIdSelector, useRatesCalculatorStore } from '../../rates-calculator.store'
import { currenciesSelector, getCurrencyOption, useCurrenciesStore } from '@/entities/currency'
import { useRatesCalculator } from '../../hooks/use-rates-calculator'
import { roundAsMoney } from '@/shared/utils/formatters'
import { NumberInput } from '@/shared/components/NumberInput'
import { Select } from 'antd'
import styles from './RatesCalculator.module.css'

export function RatesCalculator() {
  useRatesCalculator()

  const sourceAmount = useRatesCalculatorStore(sourceAmountSelector)
  const destinationAmount = useRatesCalculatorStore(destinationAmountSelector)
  const sourceCurrencyId = useRatesCalculatorStore(sourceCurrencyIdSelector)
  const destinationCurrencyId = useRatesCalculatorStore(destinationCurrencyIdSelector)

  const updateSourceAmount = useRatesCalculatorStore(updateSourceAmountSelector)
  const updateDestinationAmount = useRatesCalculatorStore(updateDestinationAmountSelector)
  const updateSourceCurrencyId = useRatesCalculatorStore(updateSourceCurrencyIdSelector)
  const updateDestinationCurrencyId = useRatesCalculatorStore(updateDestinationCurrencyIdSelector)

  const currencies = useCurrenciesStore(currenciesSelector)
  const currenciesOptions = currencies.map(getCurrencyOption)

  return (
    <div className={styles.RatesCalculator}>
      <div className={styles.Title}>
        Rates calculator
      </div>

      <div className={styles.RatesCalculatorLine}>
        <NumberInput 
          value={roundAsMoney(sourceAmount)}
          onChange={updateSourceAmount}
          className={styles.Input}
        />

        <Select 
          options={currenciesOptions}
          onChange={updateSourceCurrencyId}
          value={sourceCurrencyId}
          className={styles.Select}
        />
      </div>

      <div className={styles.RatesCalculatorLine}>
        <NumberInput 
          value={roundAsMoney(destinationAmount)}
          onChange={updateDestinationAmount}
          className={styles.Input}
        />

        <Select 
          options={currenciesOptions}
          onChange={updateDestinationCurrencyId}
          value={destinationCurrencyId}
          className={styles.Select}
        />
      </div>
    </div>
  )
}
