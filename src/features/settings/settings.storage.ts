import { LocalStorage } from '@oleksii-pavlov/storages'
import type { Settings } from './types/settings'

export const settingsLocalStorage = new LocalStorage<Settings>('settings')
