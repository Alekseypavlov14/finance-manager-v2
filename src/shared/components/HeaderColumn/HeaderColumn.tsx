import type { ComponentProps } from 'react'
import styles from './HeaderColumn.module.css'
import clsx from 'clsx'

interface HeaderColumnProps extends ComponentProps<'div'> {}

export function HeaderColumn({ className, children, ...props }: HeaderColumnProps) {
  return (
    <div 
      className={clsx(styles.HeaderColumn, className)}
      {...props}
    >
      {children}
    </div>
  )
}
