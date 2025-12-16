import type { ComponentProps } from 'react'
import styles from './StatisticsBlockLabel.module.css'
import clsx from 'clsx'

interface StatisticsBlockLabelProps extends ComponentProps<'div'> {}

export function StatisticsBlockLabel({ className, children, ...props }: StatisticsBlockLabelProps) {
  return (
    <div 
      className={clsx(styles.StatisticsBlockLabel, className)}
      {...props}
    >
      {children}
    </div>
  )
}
