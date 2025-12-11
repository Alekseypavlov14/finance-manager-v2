import type { ComponentProps } from 'react'
import styles from './FloatingAreaButton.module.css'
import clsx from 'clsx'

interface FloatingAreaButtonProps extends ComponentProps<'button'> {
  filled?: boolean
}

export function FloatingAreaButton({ className, children, filled, ...props }: FloatingAreaButtonProps) {
  return (
    <button 
      className={clsx(styles.FloatingAreaButton, filled && styles.Filled)}
      {...props}
    >
      {children}
    </button>
  )
}
