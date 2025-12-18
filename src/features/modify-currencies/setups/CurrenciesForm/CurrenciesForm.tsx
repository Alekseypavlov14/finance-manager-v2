import { currenciesSelector, useCurrenciesStore } from '@/entities/currency'
import { CurrenciesFormItem } from '../../components/CurrenciesFormItem'
import styles from './CurrenciesForm.module.css'

export function CurrenciesForm() {
  const currencies = useCurrenciesStore(currenciesSelector)

  return (
    <div className={styles.CurrenciesForm}>
      {currencies.map(currency => (
        <CurrenciesFormItem 
          currencyCode={currency.code}
          key={currency.id}
        />
      ))}
    </div>
  )
}
