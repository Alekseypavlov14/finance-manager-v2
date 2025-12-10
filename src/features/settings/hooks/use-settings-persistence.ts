import { displayTransactionsAmountSelector, displayTransactionsCommentsSelector, referenceCurrencyIdSelector, useSettingsStore } from '../settings.store'
import { settingsLocalStorage } from './../settings.storage'
import { useEffect } from 'react'

export function useSettingsPersistence() {
  const referenceCurrencyId = useSettingsStore(referenceCurrencyIdSelector)

  const displayTransactionsComments = useSettingsStore(displayTransactionsCommentsSelector)
  const displayTransactionsAmount = useSettingsStore(displayTransactionsAmountSelector)

  useEffect(() => {
    settingsLocalStorage.setValue({
      referenceCurrencyId,
      displayTransactionsComments,
      displayTransactionsAmount,
    })
  }, [
    referenceCurrencyId,
    displayTransactionsComments,
    displayTransactionsAmount,
  ])
}
