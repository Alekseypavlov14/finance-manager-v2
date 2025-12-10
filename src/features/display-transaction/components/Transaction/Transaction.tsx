import type { ComponentProps } from 'react'
import { Palette } from '@/shared/components/Palette'
import styles from './Transaction.module.css'
import clsx from 'clsx'

interface TransactionProps extends ComponentProps<'div'> {}

export function Transaction({ className, children, ...props }: TransactionProps) {
  return (
    <Palette 
      className={clsx(styles.Transaction, className)}
      {...props}
    >
      {children}
    </Palette>
  )
}
