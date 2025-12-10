import type { ComponentProps } from 'react'
import styles from './TransactionRow.module.css'
import clsx from 'clsx'

interface TransactionRowProps extends ComponentProps<'div'> {}

export function TransactionRow({ className, children, ...props }: TransactionRowProps) {
  return (
    <div 
      className={clsx(styles.TransactionRow, className)}
      {...props}
    >
      {children}
    </div>
  )
}
