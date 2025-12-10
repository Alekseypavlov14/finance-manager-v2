import type { ComponentProps } from 'react'
import styles from './TransactionDate.module.css'
import clsx from 'clsx'

interface TransactionDateProps extends ComponentProps<'div'> {}

export function TransactionDate({ className, children, ...props }: TransactionDateProps) {
  return (
    <div 
      className={clsx(styles.TransactionDate, className)}
      {...props}
    >
      {children}
    </div>
  )
}
