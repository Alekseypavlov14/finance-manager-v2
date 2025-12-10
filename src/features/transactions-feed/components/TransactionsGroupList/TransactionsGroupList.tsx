import type { ComponentProps } from 'react'
import styles from './TransactionsGroupList.module.css'
import clsx from 'clsx'

interface TransactionsGroupListProps extends ComponentProps<'div'> {}

export function TransactionsGroupList({ className, children, ...props }: TransactionsGroupListProps) {
  return (
    <div 
      className={clsx(styles.TransactionsGroupList)}
      {...props}
    >
      {children}
    </div>
  )
}
