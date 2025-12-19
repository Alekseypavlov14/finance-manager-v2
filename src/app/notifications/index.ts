import { App } from 'antd'

export function useNotifications() {
  const { message } = App.useApp()

  return ({
    createSuccessNotification: message.success,
    createWarningNotification: message.warning,
    createErrorNotification: message.error,
    createInfoNotifications: message.info,
  })
}
