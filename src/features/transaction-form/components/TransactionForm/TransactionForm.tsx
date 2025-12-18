import { transactionDateSelector, transactionDescriptionSelector, transactionLostSelector, transactionReceivedSelector, transactionTypeSelector, updateTransactionDateSelector, updateTransactionDescriptionSelector, updateTransactionLostAmountSelector, updateTransactionLostCurrencyIdSelector, updateTransactionReceivedAmountSelector, updateTransactionReceivedCurrencyIdSelector, updateTransactionTypeSelector, useTransactionFormStore } from '../../transaction-form.store'
import { losingTransactionTypes, receivingTransactionTypes, transactionTypes, type TransactionData } from '@/entities/transactions'
import { currenciesSelector, getCurrencyOption, useCurrenciesStore } from '@/entities/currency'
import { convertDayjsToMilliseconds } from '@/shared/utils/datetime'
import { DatePicker, Input, Select } from 'antd'
import { useLoadInitialData } from '../../hooks/use-load-initial-data'
import { FieldColumn } from '@/shared/components/FieldColumn'
import type { Option } from '@/shared/types/option'
import { NumberInput } from '@/shared/components/NumberInput'
import { FieldLabel } from '@/shared/components/FieldLabel'
import { Field } from '@/shared/components/Field'
import { Form } from '@/shared/components/Form'
import dayjs from 'dayjs'
import styles from './TransactionForm.module.css'

interface TransactionFormProps {
  initialTransactionData: TransactionData
}

export function TransactionForm({
  initialTransactionData,
}: TransactionFormProps) {
  useLoadInitialData(initialTransactionData)

  const transactionType = useTransactionFormStore(transactionTypeSelector)
  const transactionDescription = useTransactionFormStore(transactionDescriptionSelector)
  const transactionReceived = useTransactionFormStore(transactionReceivedSelector)
  const transactionLost = useTransactionFormStore(transactionLostSelector)
  const transactionDate = useTransactionFormStore(transactionDateSelector)

  const updateTransactionType = useTransactionFormStore(updateTransactionTypeSelector)
  const updateTransactionDescription = useTransactionFormStore(updateTransactionDescriptionSelector)
  const updateTransactionReceivedAmount = useTransactionFormStore(updateTransactionReceivedAmountSelector)
  const updateTransactionReceivedCurrencyId = useTransactionFormStore(updateTransactionReceivedCurrencyIdSelector)
  const updateTransactionLostAmount = useTransactionFormStore(updateTransactionLostAmountSelector)
  const updateTransactionLostCurrencyId = useTransactionFormStore(updateTransactionLostCurrencyIdSelector)
  const updateTransactionDate = useTransactionFormStore(updateTransactionDateSelector)

  const transactionTypeOptions = transactionTypes.map<Option<string>>(transactionType => ({ label: transactionType, value: transactionType }))

  const currencies = useCurrenciesStore(currenciesSelector)
  const currencyOptions = currencies.map(getCurrencyOption)

  return (
    <Form>
      <Field>
        <FieldLabel>Transaction type:</FieldLabel>

        <Select 
          options={transactionTypeOptions}
          value={transactionType}
          onChange={updateTransactionType}
        />
      </Field>

      {receivingTransactionTypes.includes(transactionType) ? (
        <Field>
          <FieldLabel>Received:</FieldLabel>

          <FieldColumn>
            <NumberInput 
              value={transactionReceived.amount}
              onChange={updateTransactionReceivedAmount}
            />

            <Select 
              options={currencyOptions}
              value={transactionReceived.currencyId}
              onChange={updateTransactionReceivedCurrencyId}
              className={styles.CurrencySelect}
            />        
          </FieldColumn>
        </Field>
      ) : null}

      {losingTransactionTypes.includes(transactionType) ? (
        <Field>
          <FieldLabel>Lost:</FieldLabel>

          <FieldColumn>
            <NumberInput 
              value={transactionLost.amount}
              onChange={updateTransactionLostAmount}
            />

            <Select 
              options={currencyOptions}
              value={transactionLost.currencyId}
              onChange={updateTransactionLostCurrencyId}
              className={styles.CurrencySelect}
            />
          </FieldColumn>
        </Field>
      ) : null}
      
      <Field>
        <FieldLabel>Transaction description:</FieldLabel>

        <Input 
          onChange={e => updateTransactionDescription(e.target.value)}
          value={transactionDescription}
        />
      </Field>

      <Field>
        <FieldLabel>Date:</FieldLabel>

        <DatePicker 
          onChange={(date) => date && updateTransactionDate(convertDayjsToMilliseconds(date))}
          value={dayjs(transactionDate)}
        />
      </Field>
    </Form>
  )
}
