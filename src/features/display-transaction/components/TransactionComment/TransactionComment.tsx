import type { ComponentProps } from 'react'
import styles from './TransactionComment.module.css'
import clsx from 'clsx'

interface TransactionCommentProps extends ComponentProps<'div'> {}

export function TransactionComment({ className, children, ...props }: TransactionCommentProps) {
  return (
    <div 
      className={clsx(styles.TransactionComment, className)}
      {...props}
    >
      {children}
    </div>
  )
}
