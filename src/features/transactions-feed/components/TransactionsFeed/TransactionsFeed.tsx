import type { ComponentProps } from 'react'
import styles from './TransactionsFeed.module.css'
import clsx from 'clsx'

interface TransactionsFeedProps extends ComponentProps<'div'> {}

export function TransactionsFeed({ className, children, ...props }: TransactionsFeedProps) {
  return (
    <div 
      className={clsx(styles.TransactionsFeed)}
      {...props}
    >
      {children}
    </div>
  )
}
