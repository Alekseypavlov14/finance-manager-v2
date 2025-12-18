import { displayTransactionsAmountSelector, displayTransactionsCommentsSelector, referenceCurrencyIdSelector, updateDisplayTransactionsAmountSelector, updateDisplayTransactionsCommentsSelector, updateReferenceCurrencyIdSelector, useSettingsStore } from '../../settings.store'
import { currenciesSelector, getCurrencyOption, useCurrenciesStore } from '@/entities/currency'
import { Checkbox, InputNumber, Select } from 'antd'
import { SettingsFieldLabel } from '../../components/SettingsFieldLabel'
import { defaultSettings } from '../../constants'
import { SettingsField } from '../../components/SettingsField'
import styles from './SettingsForm.module.css'

export function SettingsForm() {
  const currencies = useCurrenciesStore(currenciesSelector)
  const currencyOptions = currencies.map(getCurrencyOption)

  const displayTransactionsComments = useSettingsStore(displayTransactionsCommentsSelector)
  const displayTransactionsAmount = useSettingsStore(displayTransactionsAmountSelector)
  const referenceCurrencyId = useSettingsStore(referenceCurrencyIdSelector)

  const updateDisplayTransactionsComments = useSettingsStore(updateDisplayTransactionsCommentsSelector)
  const updateDisplayTransactionsAmount = useSettingsStore(updateDisplayTransactionsAmountSelector)
  const updateReferenceCurrencyId = useSettingsStore(updateReferenceCurrencyIdSelector)

  const displayTransactionsCommentsId = 'display-transactions-comments'
  const displayTransactionsAmountId = 'display-transactions-amount'
  const referenceCurrencyIdId = 'reference-currency-id'

  return (
    <div className={styles.SettingsForm}>
      <SettingsField inline>
        <Checkbox 
          id={displayTransactionsCommentsId}
          value={displayTransactionsComments}
          onChange={(e) => updateDisplayTransactionsComments(e.target.checked)} 
        />

        <SettingsFieldLabel htmlFor={displayTransactionsCommentsId}>
          Display transactions comments
        </SettingsFieldLabel>
      </SettingsField>

      <SettingsField>
        <SettingsFieldLabel htmlFor={displayTransactionsAmountId}>
          Display transactions per page
        </SettingsFieldLabel>

        <InputNumber 
          id={displayTransactionsAmountId}
          value={displayTransactionsAmount}
          onChange={(value) => updateDisplayTransactionsAmount(value ?? defaultSettings.displayTransactionsAmount)}
          className={styles.Control}
        />
      </SettingsField>

      <SettingsField>
        <SettingsFieldLabel htmlFor={referenceCurrencyIdId}>
          Reference currency
        </SettingsFieldLabel>

        <Select  
          id={referenceCurrencyIdId}
          options={currencyOptions}
          value={referenceCurrencyId}
          onChange={updateReferenceCurrencyId}
          className={styles.Control}
        />
      </SettingsField>
    </div>
  )
}
