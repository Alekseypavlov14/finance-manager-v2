import { App, ConfigProvider } from 'antd'
import type { ReactNode } from 'react'
import { themeConfig } from '@/app/theme'
import styles from './AntLayout.module.css'

interface AntLayoutProps {
  children: ReactNode
}

export function AntLayout({ children }: AntLayoutProps) {
  return (
    <App className={styles.AntLayout}>
      <ConfigProvider theme={themeConfig}>
        {children}
      </ConfigProvider>
    </App>
  )
}
