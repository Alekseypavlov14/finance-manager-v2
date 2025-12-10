import type { ComponentProps } from 'react'
import styles from './TransactionColumn.module.css'
import clsx from 'clsx'

interface TransactionColumnProps extends ComponentProps<'div'> {}

export function TransactionColumn({ className, children, ...props }: TransactionColumnProps) {
  return (
    <div 
      className={clsx(styles.TransactionColumn, className)}
      {...props}
    >
      {children}
    </div>
  )
}
