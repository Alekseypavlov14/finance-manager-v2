import type { ThemeConfig } from 'antd'

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
      optionActiveBg: '#7F78FF',
      optionSelectedBg: '#7F78FF',
    }
  }
}
