import type { ComponentProps } from 'react'
import styles from './CurrenciesFormItem.module.css'
import clsx from 'clsx'

interface CurrenciesFormItemProps extends ComponentProps<'div'> {}

export function CurrenciesFormItem({ className, children, ...props }: CurrenciesFormItemProps) {
  return (
    <div 
      className={clsx(styles.CurrenciesFormItem, className)}
      {...props}
    >
      {children}
    </div>
  )
}
