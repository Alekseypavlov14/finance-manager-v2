import type { ComponentProps } from 'react'
import styles from './StatisticsBlockContent.module.css'
import clsx from 'clsx'

interface StatisticsBlockContentProps extends ComponentProps<'div'> {}

export function StatisticsBlockContent({ className, children, ...props }: StatisticsBlockContentProps) {
  return (
    <div 
      className={clsx(styles.StatisticsBlockContent, className)}
      {...props}
    >
      {children}
    </div>
  )
}
