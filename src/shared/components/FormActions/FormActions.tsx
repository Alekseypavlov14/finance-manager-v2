import type { ComponentProps } from 'react'
import styles from './FormActions.module.css'
import clsx from 'clsx'

interface FormActionsProps extends ComponentProps<'div'> {}

export function FormActions({ className, children, ...props }: FormActionsProps) {
  return (
    <div 
      className={clsx(styles.FormActions, className)}
      {...props}
    >
      {children}
    </div>
  )
}
