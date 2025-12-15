import type { ThemeConfig } from 'antd'

export const primaryColor = 'var(--primary)'
export const greenColor = 'var(--green)'
export const redColor = 'var(--red)'
export const textColor = 'var(--grey-200)'

export const themeConfig: ThemeConfig = {
  token: {
    colorPrimary: '#7F78FF',
    colorBorder: '#DDDDDD',

    colorBgContainer: '#FFFFFF',
    colorText: '#222222',
    colorTextPlaceholder: '#444444',
    colorBorderBg: '#DDDDDD',

    colorSplit: '#EBEBEB',

    colorBgElevated: '#FFFFFF',

    controlOutline: 'transparent',

    controlHeight: 36,
  },
  components: {
    Select: {
      optionActiveBg: '#7F78FF4D',
      optionSelectedBg: '#7F78FF',
      optionSelectedColor: '#FFFFFF'
    }
  }
}
