import { transactionDateSelector, transactionDescriptionSelector, transactionLostSelector, transactionReceivedSelector, transactionTypeSelector, updateTransactionDateSelector, updateTransactionDescriptionSelector, updateTransactionLostSelector, updateTransactionReceivedSelector, updateTransactionTypeSelector, useTransactionFormStore } from '../../transaction-form.store'
import { losingTransactionTypes, receivingTransactionTypes, transactionTypes, type TransactionData } from '@/entities/transactions'
import { currenciesSelector, useCurrenciesStore } from '@/entities/currency'
import { convertDayjsToMilliseconds } from '@/shared/utils/datetime'
import { DatePicker, Input, Select } from 'antd'
import type { Option } from '@/shared/types/option'
import type { Id } from '@/shared/types/entity'
import { FieldColumn } from '@/shared/components/FieldColumn'
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
  const transactionType = useTransactionFormStore(transactionTypeSelector)
  const transactionDescription = useTransactionFormStore(transactionDescriptionSelector)
  const transactionReceived = useTransactionFormStore(transactionReceivedSelector)
  const transactionLost = useTransactionFormStore(transactionLostSelector)
  const transactionDate = useTransactionFormStore(transactionDateSelector)

  const updateTransactionType = useTransactionFormStore(updateTransactionTypeSelector)
  const updateTransactionDescription = useTransactionFormStore(updateTransactionDescriptionSelector)
  const updateTransactionReceived = useTransactionFormStore(updateTransactionReceivedSelector)
  const updateTransactionLost = useTransactionFormStore(updateTransactionLostSelector)
  const updateTransactionDate = useTransactionFormStore(updateTransactionDateSelector)

  const transactionTypeOptions = transactionTypes.map<Option<string>>(transactionType => ({ label: transactionType, value: transactionType }))

  const currencies = useCurrenciesStore(currenciesSelector)
  const currencyOptions = currencies.map<Option<Id>>(currency => ({ label: currency.label, value: currency.id }))

  function updateTransactionReceivedAmount(amount: number) {
    updateTransactionReceived({ ...transactionReceived, amount })
  }
  function updateTransactionReceivedCurrencyId(currencyId: Id) {
    updateTransactionReceived({ ...transactionReceived, currencyId })
  }

  function updateTransactionLostAmount(amount: number) {
    updateTransactionLost({ ...transactionReceived, amount })
  }
  function updateTransactionLostCurrencyId(currencyId: Id) {
    updateTransactionLost({ ...transactionReceived, currencyId })
  }

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
            <Input 
              value={transactionReceived.amount}
              onChange={(e) => updateTransactionReceivedAmount(parseFloat(e.target.value))}
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
            <Input 
              value={transactionLost.amount}
              onChange={(e) => updateTransactionLostAmount(parseFloat(e.target.value))}
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
