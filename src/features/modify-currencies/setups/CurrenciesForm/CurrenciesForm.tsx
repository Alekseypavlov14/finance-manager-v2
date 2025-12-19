import { creatingCurrenciesSelector, useCurrenciesFormStore } from '../../currencies-form.store'
import { currenciesSelector, useCurrenciesStore } from '@/entities/currency'
import { useCurrenciesFormActions } from '../../hooks/use-currencies-form-actions'
import { CurrenciesFormItemButton } from '../../components/CurrenciesFormItemButton'
import { CurrenciesFormButton } from '../../components/CurrenciesFormButton'
import { CurrenciesFormInput } from '../../components/CurrenciesFormInput'
import { CurrenciesFormItem } from '../../components/CurrenciesFormItem'
import { useNotifications } from '@/app/notifications'
import type { ChangeEvent } from 'react'
import type { Id } from '@/shared/types/entity'
import styles from './CurrenciesForm.module.css'
import pencilIcon from '../../icons/pencil.svg'
import checkIcon from '../../icons/check.svg'
import crossIcon from '../../icons/cross.svg'

export function CurrenciesForm() {
  const currencies = useCurrenciesStore(currenciesSelector)
  const creatingCurrencies = useCurrenciesFormStore(creatingCurrenciesSelector)

  const { 
    isModifyingById,
    isDeletableById,

    createNewCurrency,
    createUpdateCreatingCurrencyCodeByIndex,
    createSaveNewCurrencyByIndexHandler,
    createClearCreatingCurrencyByIndex,

    createToggleModifyingIdHandlerById,
    createUpdateCurrencyCodeHandlerById,
    createDeleteCurrencyHandlerById, 
  } = useCurrenciesFormActions()

  const { 
    createSuccessNotification, 
    createWarningNotification,
    createInfoNotifications, 
  } = useNotifications()

  function createComposedDeleteHandlerById(id: Id) {
    const deleteHandler = createDeleteCurrencyHandlerById(id)

    return () => {
      if (!isDeletableById(id)) return createWarningNotification('This currency is in use')
      
      deleteHandler()
      createInfoNotifications('The currency is deleted')
    }
  }

  function createSaveCreatingCurrencyHandlerByIndex(index: number) {
    const saveHandler = createSaveNewCurrencyByIndexHandler(index)

    return () => {
      saveHandler()
      createSuccessNotification('The currency is created')
    }
  }

  function createClearCreatingCurrencyHandlerByIndex(index: number) {
    const clearHandler = createClearCreatingCurrencyByIndex(index)

    return () => {
      clearHandler()
      createInfoNotifications('The currency is cleared')
    }
  }

  function createInputHandler(callback: (value: string) => void) {
    return (e: ChangeEvent<HTMLInputElement>) => callback(e.target.value.trim())
  }

  return (
    <div className={styles.CurrenciesForm}>
      <div className={styles.Title}>
        Currencies
      </div>
      
      {currencies.map(currency => (
        <CurrenciesFormItem key={currency.id}>
          <CurrenciesFormInput 
            value={currency.code}
            onChange={createInputHandler(createUpdateCurrencyCodeHandlerById(currency.id))}
            disabled={!isModifyingById(currency.id)}
          />
  
          {isModifyingById(currency.id) ? (
            <CurrenciesFormItemButton onClick={createComposedDeleteHandlerById(currency.id)}>
              <img src={crossIcon} />
            </CurrenciesFormItemButton>
          ) : null}

          <CurrenciesFormItemButton onClick={createToggleModifyingIdHandlerById(currency.id)}>
            <img src={isModifyingById(currency.id) ? checkIcon : pencilIcon} />
          </CurrenciesFormItemButton>
        </CurrenciesFormItem>
      ))}

      {creatingCurrencies.map((currencyData, index) => (
        <CurrenciesFormItem key={index}>
          <CurrenciesFormInput 
            value={currencyData.code}
            onChange={createInputHandler(createUpdateCreatingCurrencyCodeByIndex(index))}
          />

          <CurrenciesFormItemButton onClick={createSaveCreatingCurrencyHandlerByIndex(index)}>
            <img src={checkIcon} />
          </CurrenciesFormItemButton>

          <CurrenciesFormItemButton onClick={createClearCreatingCurrencyHandlerByIndex(index)}>
            <img src={crossIcon} />
          </CurrenciesFormItemButton>
        </CurrenciesFormItem>
      ))}

      <CurrenciesFormButton onClick={createNewCurrency}>
        Add a new currency
      </CurrenciesFormButton>
    </div>
  )
}
