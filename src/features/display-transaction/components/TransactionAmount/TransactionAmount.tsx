import type { ComponentProps } from 'react'
import styles from './TransactionAmount.module.css'
import clsx from 'clsx'

interface TransactionAmountProps extends ComponentProps<'div'> {
  positive?: boolean
  negative?: boolean
}

export function TransactionAmount({ className, children, positive, negative, ...props }: TransactionAmountProps) {
  return (
    <div 
      className={clsx(styles.TransactionAmount, positive && styles.Positive, negative && styles.Negative)}
      {...props}
    >
      {children}
    </div>
  )
}
