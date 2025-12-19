import { Input, type InputProps } from 'antd'
import styles from './CurrenciesFormInput.module.css'
import clsx from 'clsx'

interface CurrenciesFormInputProps extends InputProps {}

export function CurrenciesFormInput({ className, ...props }: CurrenciesFormInputProps) {
  return (
    <Input
      className={clsx(styles.CurrenciesFormInput, className)}
      {...props}
    />
  )
}
