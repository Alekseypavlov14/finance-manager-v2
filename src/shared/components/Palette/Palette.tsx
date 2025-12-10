import type { ComponentProps } from 'react'
import styles from './Palette.module.css'
import clsx from 'clsx'

interface PaletteProps extends ComponentProps<'div'> {
  block?: boolean
  round?: boolean
}

export function Palette({ 
  className, 
  children, 

  block,
  round,

  ...props 
}: PaletteProps) {
  return (
    <div 
      className={clsx(styles.Palette, block && styles.Block, round && styles.Round, className)}
      {...props}
    >
      {children}
    </div>
  )
}
