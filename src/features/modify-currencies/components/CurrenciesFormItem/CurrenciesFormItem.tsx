import type { ComponentProps } from 'react'
import type { CurrencyCode } from '@/entities/currency'
import { Input } from 'antd'
import pencilIcon from '../../icons/pencil.svg'
import crossIcon from '../../icons/cross.svg'
import styles from './CurrenciesFormItem.module.css'
import clsx from 'clsx'

interface CurrenciesFormItemProps extends Omit<ComponentProps<'div'>, 'children'> {
  currencyCode: CurrencyCode
  updateCurrencyCode?: (code: CurrencyCode) => void

  isModifying?: boolean
  onToggleModification?: () => void

  onDelete?: () => void
}

export function CurrenciesFormItem({
  currencyCode,
  updateCurrencyCode = () => {},

  isModifying,
  onToggleModification = () => {},

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
        disabled={!isModifying}
      />

      {isModifying ? (
        <button 
          className={styles.Button}
          onClick={onDelete}
          disabled={!isModifying}
        >
          <img src={crossIcon} />
        </button>
      ) : null}

      <button 
        className={styles.Button}
        onClick={onToggleModification}
      >
        <img src={pencilIcon} />
      </button>
    </div>
  )
}
