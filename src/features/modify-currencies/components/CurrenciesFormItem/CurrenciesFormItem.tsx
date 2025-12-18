import type { ComponentProps } from 'react'
import type { CurrencyCode } from '@/entities/currency'
import { Input } from 'antd'
import crossIcon from '../../icons/cross.svg'
import styles from './CurrenciesFormItem.module.css'
import clsx from 'clsx'

interface CurrenciesFormItemProps extends Omit<ComponentProps<'div'>, 'children'> {
  currencyCode: CurrencyCode
  updateCurrencyCode?: (code: CurrencyCode) => void
  onDelete?: () => void
}

export function CurrenciesFormItem({
  currencyCode,
  updateCurrencyCode = () => {},
  onDelete = () => {},

  className,
  ...props
}: CurrenciesFormItemProps) {
  return (
    <div 
      className={clsx(styles.CurrenciesFormItem, className)}
      {...props}
    >
      <Input 
        className={styles.Control}
        onChange={(e) => updateCurrencyCode(e.target.value.trim())}
        value={currencyCode}
      />

      <button 
        className={styles.Delete}
        onClick={onDelete}
      >
        <img src={crossIcon} />
      </button>
    </div>
  )
}
