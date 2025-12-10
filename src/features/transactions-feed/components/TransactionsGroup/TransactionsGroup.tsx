import type { ComponentProps } from 'react'
import styles from './TransactionsGroup.module.css'
import clsx from 'clsx'

interface TransactionsGroupProps extends ComponentProps<'div'> {}

export function TransactionsGroup({ className, children, ...props }: TransactionsGroupProps) {
  return (
    <div 
      className={clsx(styles.TransactionsGroup, className)}
      {...props}
    >
      {children}
    </div>
  )
}
