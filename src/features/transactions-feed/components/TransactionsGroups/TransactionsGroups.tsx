import type { ComponentProps } from 'react'
import styles from './TransactionsGroups.module.css'
import clsx from 'clsx'

interface TransactionsGroupsProps extends ComponentProps<'div'> {}

export function TransactionsGroups({ className, children, ...props }: TransactionsGroupsProps) {
  return (
    <div 
      className={clsx(styles.TransactionsGroups)}
      {...props}
    >
      {children}
    </div>
  )
}
