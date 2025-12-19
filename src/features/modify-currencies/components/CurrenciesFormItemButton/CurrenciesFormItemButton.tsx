import type { ComponentProps } from 'react'
import styles from './CurrenciesFormItemButton.module.css'
import clsx from 'clsx'

interface CurrenciesFormItemButtonProps extends ComponentProps<'button'> {}

export function CurrenciesFormItemButton({ className, children, ...props }: CurrenciesFormItemButtonProps) {
  return (
    <button 
      className={clsx(styles.CurrenciesFormItemButton, className)}
      {...props}
    >
      {children}
    </button>
  )
}
