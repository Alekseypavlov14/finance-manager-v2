import type { ComponentProps } from 'react'
import styles from './TransactionsGroupLabel.module.css'
import clsx from 'clsx'

interface TransactionsGroupLabelProps extends ComponentProps<'div'> {}

export function TransactionsGroupLabel({ className, children, ...props }: TransactionsGroupLabelProps) {
  return (
    <div 
      className={clsx(styles.TransactionsGroupLabel, className)}
      {...props}
    >
      {children}
    </div>
  )
}
