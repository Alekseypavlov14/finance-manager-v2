import type { ComponentProps } from 'react'
import styles from './FloatingArea.module.css'
import clsx from 'clsx'

interface FloatingAreaProps extends ComponentProps<'div'> {}

export function FloatingArea({ className, children, ...props }: FloatingAreaProps) {
  return (
    <div 
      className={clsx(styles.FloatingArea, className)}
      {...props}
    >
      {children}
    </div>
  )
}
