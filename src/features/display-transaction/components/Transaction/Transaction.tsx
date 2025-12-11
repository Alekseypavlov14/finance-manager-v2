import type { ComponentProps } from 'react'
import { Palette } from '@/shared/components/Palette'
import styles from './Transaction.module.css'
import clsx from 'clsx'

interface TransactionProps extends ComponentProps<'div'> {
  positive?: boolean
  negative?: boolean
}

export function Transaction({ className, children, positive, negative, ...props }: TransactionProps) {
  return (
    <Palette 
      className={clsx(styles.Transaction, positive && styles.Positive, negative && styles.Negative, className)}
      {...props}
    >
      {children}
    </Palette>
  )
}
