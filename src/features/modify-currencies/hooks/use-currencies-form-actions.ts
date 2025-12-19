import { addCreatingCurrencySelector, creatingCurrenciesSelector, modifyingIdsSelector, removeCreatingCurrenciesByIndexSelector, toggleModifyingIdSelector, updateCreatingCurrencyCodeByIndexSelector, useCurrenciesFormStore } from '../currencies-form.store'
import { transactionsSelector, useTransactionsStore } from '@/entities/transactions'
import { useCurrenciesActions } from '@/entities/currency'
import { defaultCurrencyCode } from '../constants'
import type { Id } from '@/shared/types/entity'

export function useCurrenciesFormActions() {
  const transactions = useTransactionsStore(transactionsSelector)

  const creatingCurrencies = useCurrenciesFormStore(creatingCurrenciesSelector)
  const modifyingIds = useCurrenciesFormStore(modifyingIdsSelector)

  const addCreatingCurrency = useCurrenciesFormStore(addCreatingCurrencySelector)
  const updateCreatingCurrencyCodeByIndex = useCurrenciesFormStore(updateCreatingCurrencyCodeByIndexSelector)
  const removeCreatingCurrenciesByIndex = useCurrenciesFormStore(removeCreatingCurrenciesByIndexSelector)
  const toggleModifyingId = useCurrenciesFormStore(toggleModifyingIdSelector)
  
  const { 
    createCurrency, 
    updateCurrencyById, 
    deleteCurrencyById 
  } = useCurrenciesActions()

  // flag getters
  function isModifyingById(id: Id) {
    return modifyingIds.includes(id)
  }
  function isDeletableById(id: Id) {
    return isModifyingById(id) && !Boolean(getTransactionsByCurrencyId(id).length)
  }

  // creating new currencies
  function createNewCurrency() {
    addCreatingCurrency({ code: defaultCurrencyCode })
  }
  function createUpdateCreatingCurrencyCodeByIndex(index: number) {
    return (code: string) => updateCreatingCurrencyCodeByIndex(index, code)
  }
  function createSaveNewCurrencyByIndexHandler(index: number) {
    return () => {
      const currencyCode = creatingCurrencies[index].code
      createCurrency({ code: currencyCode })
      removeCreatingCurrenciesByIndex(index)
    }
  }
  function createClearCreatingCurrencyByIndex(index: number) {
    return () => removeCreatingCurrenciesByIndex(index)
  }
  
  // updating existing currencies
  function createToggleModifyingIdHandlerById(id: Id) {
    return () => toggleModifyingId(id)
  }
  function createUpdateCurrencyCodeHandlerById(id: Id) {
    return (code: string) => updateCurrencyById(id, { code })
  }
  function createDeleteCurrencyHandlerById(id: Id) {
    return () => deleteCurrencyById(id)
  }

  // utils
  function getTransactionsByCurrencyId(id: Id) {
    return transactions.filter(transaction => transaction.received.currencyId === id || transaction.lost.currencyId === id)
  }

  return ({
    isModifyingById,
    isDeletableById,

    createNewCurrency,
    createUpdateCreatingCurrencyCodeByIndex,
    createSaveNewCurrencyByIndexHandler,
    createClearCreatingCurrencyByIndex,

    createToggleModifyingIdHandlerById,
    createUpdateCurrencyCodeHandlerById,
    createDeleteCurrencyHandlerById,
  })
}
