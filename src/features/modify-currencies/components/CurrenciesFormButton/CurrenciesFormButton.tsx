import { Button, type ButtonProps } from 'antd'
import styles from './CurrenciesFormButton.module.css'
import clsx from 'clsx'

interface CurrenciesFormButtonProps extends ButtonProps {}

export function CurrenciesFormButton({ className, children, ...props }: CurrenciesFormButtonProps) {
  return (
    <Button 
      className={clsx(styles.CurrenciesFormButton, className)}
      variant='filled'
      type='primary'
      block
      {...props}
    >
      {children}
    </Button>
  )
}
