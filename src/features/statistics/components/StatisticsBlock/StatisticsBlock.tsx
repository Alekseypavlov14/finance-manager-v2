import type { ComponentProps } from 'react'
import styles from './StatisticsBlock.module.css'
import clsx from 'clsx'

interface StatisticsBlockProps extends ComponentProps<'div'> {}

export function StatisticsBlock({ className, children, ...props }: StatisticsBlockProps) {
  return (
    <div 
      className={clsx(styles.StatisticsBlock, className)}
      {...props}
    >
      {children}
    </div>
  )
}
