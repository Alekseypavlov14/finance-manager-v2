import type { ComponentProps } from 'react'
import styles from './StatisticsBlocks.module.css'
import clsx from 'clsx'

interface StatisticsBlocksProps extends ComponentProps<'div'> {}

export function StatisticsBlocks({ className, children, ...props }: StatisticsBlocksProps) {
  return (
    <div 
      className={clsx(styles.StatisticsBlocks, className)}
      {...props}
    >
      {children}
    </div>
  )
}
