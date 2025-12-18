import type { ComponentProps } from 'react'
import styles from './SettingsField.module.css'
import clsx from 'clsx'

interface SettingsFieldProps extends ComponentProps<'div'> {
  inline?: boolean
}

export function SettingsField({ className, children, inline, ...props }: SettingsFieldProps) {
  return (
    <div 
      className={clsx(styles.SettingsField, className, inline && styles.Inline)}
      {...props}
    >
      {children}
    </div>
  )
}
