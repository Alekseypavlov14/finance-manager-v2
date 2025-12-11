import type { ComponentProps } from 'react'
import styles from './Logo.module.css'
import clsx from 'clsx'

interface LogoProps extends ComponentProps<'a'> {}

export function Logo({ className, children, ...props }: LogoProps) {
  return (
    <a 
      className={clsx(styles.Logo, className)}
      {...props}
    >
      FM
    </a>
  )
}
