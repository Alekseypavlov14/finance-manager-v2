import { displayTransactionsAmountSelector, displayTransactionsCommentsSelector, useSettingsStore } from '../settings.store'
import { settingsLocalStorage } from './../settings.storage'
import { useEffect } from 'react'

export function useSettingsPersistence() {
  const displayTransactionsComments = useSettingsStore(displayTransactionsCommentsSelector)
  const displayTransactionsAmount = useSettingsStore(displayTransactionsAmountSelector)

  useEffect(() => {
    settingsLocalStorage.setValue({
      displayTransactionsComments,
      displayTransactionsAmount,
    })
  }, [
    displayTransactionsComments,
    displayTransactionsAmount,
  ])
}
