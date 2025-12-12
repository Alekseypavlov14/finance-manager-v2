import { type TransactionMoney } from '@/entities/transactions'
import { useCurrenciesActions } from '@/entities/currency'
import { useCurrencyRates } from '@/features/currencies-rates'

export function useStatisticApproaches() {
  const { getCurrencyRate } = useCurrencyRates()
  const { getCurrencyById } = useCurrenciesActions()

  // returns total money amount in USD
  function getTransactionsTotalAmount(transactionsMoney: TransactionMoney[]) {
    const moneyAmountInUSD = transactionsMoney.map(money => {
      const currency = getCurrencyById(money.currencyId)
      if (!currency) return 0
      
      const rate = getCurrencyRate(currency.code)
      if (!rate) return 0
  
      const amount = money.amount / rate
      return amount
    })
  
    const totalAmountInUSD = moneyAmountInUSD.reduce((total, current) => total + current, 0)
    return totalAmountInUSD
  }

  return ({
    getTransactionsTotalAmount
  })
}
