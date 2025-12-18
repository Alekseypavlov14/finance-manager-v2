import { modifyingIdsSelector, toggleModifyingIdSelector, useCurrenciesFormStore } from '../../currencies-form.store'
import { currenciesSelector, useCurrenciesActions, useCurrenciesStore } from '@/entities/currency'
import { CurrenciesFormButton } from '../../components/CurrenciesFormButton'
import { defaultCurrencyCode } from '../../constants'
import { CurrenciesFormItem } from '../../components/CurrenciesFormItem'
import type { Id } from '@/shared/types/entity'
import styles from './CurrenciesForm.module.css'

export function CurrenciesForm() {
  const currencies = useCurrenciesStore(currenciesSelector)

  const { 
    createCurrency, 
    updateCurrencyById, 
    deleteCurrencyById 
  } = useCurrenciesActions()

  const modifyingIds = useCurrenciesFormStore(modifyingIdsSelector)
  const toggleModifyingId = useCurrenciesFormStore(toggleModifyingIdSelector)

  function isModifying(id: Id) {
    return modifyingIds.includes(id)
  }
  function createUpdateCurrencyCodeHandlerById(id: Id) {
    return (code: string) => updateCurrencyById(id, { code })
  }
  function createToggleModifyingIdHandlerById(id: Id) {
    return () => toggleModifyingId(id)
  }
  function createDeleteTransactionHandlerById(id: Id) {
    return () => deleteCurrencyById(id)
  }
  
  function addNewCurrencyHandler() {
    const newCurrency = createCurrency({ code: defaultCurrencyCode })
    toggleModifyingId(newCurrency.id)
  }

  return (
    <div className={styles.CurrenciesForm}>
      {currencies.map(currency => (
        <CurrenciesFormItem 
          currencyCode={currency.code}
          updateCurrencyCode={createUpdateCurrencyCodeHandlerById(currency.id)}

          isModifying={isModifying(currency.id)}
          onToggleModification={createToggleModifyingIdHandlerById(currency.id)}

          onDelete={createDeleteTransactionHandlerById(currency.id)}
          key={currency.id}
        />
      ))}

      <CurrenciesFormButton onClick={addNewCurrencyHandler}>
        Add a new currency
      </CurrenciesFormButton>
    </div>
  )
}
