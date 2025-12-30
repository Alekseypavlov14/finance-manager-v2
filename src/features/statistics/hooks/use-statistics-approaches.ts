import { type TransactionMoney } from '@/entities/transactions'
import { useCurrencyRates } from '@/features/currencies-rates'
import { sum } from '@/shared/utils/math'

export function useStatisticApproaches() {
  const { getMoneyAmountInUSD } = useCurrencyRates()

  // returns total money amount in USD
  function getTransactionsTotalAmount(transactionsMoney: TransactionMoney[]) {
    const moneyAmountsInUSD = transactionsMoney.map(getMoneyAmountInUSD)
    const totalAmountInUSD = sum(moneyAmountsInUSD)
    return totalAmountInUSD
  }

  return ({
    getTransactionsTotalAmount
  })
}
