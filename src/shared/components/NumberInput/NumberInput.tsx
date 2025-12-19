import { useEffect, useState, type ChangeEvent } from 'react'
import { Input, type InputProps } from 'antd'
import styles from './NumberInput.module.css'
import clsx from 'clsx'

interface NumberInputProps extends Omit<InputProps, 'onChange'> {
  value?: number
  defaultValue?: number
  onChange?: (value: number) => void
}

export function NumberInput({ 
  defaultValue = 0,
  value = defaultValue, 
  onChange = () => {}, 

  className,
  ...props 
}: NumberInputProps) {
  const [controlValue, setControlValue] = useState<string>(String(value))
  useEffect(() => setControlValue(String(value)), [value])

  function changeHandler(e: ChangeEvent<HTMLInputElement>) {
    setControlValue(e.target.value.trim())
    onChange(Number(e.target.value.trim()) || defaultValue)
  }

  return (
    <Input 
      className={clsx(className, styles.NumberInput)}
      onBlur={() => setControlValue(String(value))}
      onChange={changeHandler}
      value={controlValue}
      {...props}
    />
  )
}
