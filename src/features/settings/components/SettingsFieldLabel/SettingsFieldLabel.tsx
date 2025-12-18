import type { ComponentProps } from 'react'
import styles from './SettingsFieldLabel.module.css'
import clsx from 'clsx'

interface SettingsFieldLabelProps extends ComponentProps<'label'> {}

export function SettingsFieldLabel({ className, children, ...props }: SettingsFieldLabelProps) {
  return (
    <label 
      className={clsx(styles.SettingsFieldLabel, className)}
      {...props}
    >
      {children}
    </label>
  )
}
