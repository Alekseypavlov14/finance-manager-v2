import type { ComponentProps } from 'react'
import styles from './FieldColumn.module.css'
import clsx from 'clsx'

interface FieldColumnProps extends ComponentProps<'div'> {}

export function FieldColumn({ className, children, ...props }: FieldColumnProps) {
  return (
    <div 
      className={clsx(styles.FieldColumn, className)}
      {...props}
    >
      {children}
    </div>
  )
}
