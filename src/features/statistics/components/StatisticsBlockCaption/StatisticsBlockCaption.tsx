import type { ComponentProps } from 'react'
import styles from './StatisticsBlockCaption.module.css'
import clsx from 'clsx'

interface StatisticsBlockCaptionProps extends ComponentProps<'div'> {}

export function StatisticsBlockCaption({ className, children, ...props }: StatisticsBlockCaptionProps) {
  return (
    <div 
      className={clsx(styles.StatisticsBlockCaption, className)}
      {...props}
    >
      {children}
    </div>
  )
}
