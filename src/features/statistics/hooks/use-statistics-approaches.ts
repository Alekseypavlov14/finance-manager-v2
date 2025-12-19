import { type TransactionMoney } from '@/entities/transactions'
import { useCurrencyRates } from '@/features/currencies-rates'
import { sum } from '@/shared/utils/math'

export function useStatisticApproaches() {
  const { getCurrencyRateById } = useCurrencyRates()

  // returns total money amount in USD
  function getTransactionsTotalAmount(transactionsMoney: TransactionMoney[]) {
    const moneyAmountInUSD = transactionsMoney.map(money => {
      const rate = getCurrencyRateById(money.currencyId)
      if (!rate) return 0
      
      const amount = money.amount / rate
      return amount
    })
  
    const totalAmountInUSD = sum(moneyAmountInUSD)
    return totalAmountInUSD
  }

  return ({
    getTransactionsTotalAmount
  })
}
