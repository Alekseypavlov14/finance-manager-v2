import { create } from 'zustand'

interface AppSidebarState {
  isOpened: boolean
} 

interface AppSidebarActions {
  setIsOpened: (isOpened: boolean) => void
  toggle: () => void
}

export interface AppSidebarStore extends AppSidebarState, AppSidebarActions {}

export const useAppSidebarStore = create<AppSidebarStore>(set => ({
  isOpened: false,
  setIsOpened: (isOpened) => set(state => ({ ...state, isOpened })),
  toggle: () => set(state => ({ ...state, isOpened: !state.isOpened }))
}))

export const isOpenedSelector = (store: AppSidebarStore) => store.isOpened
export const setIsOpenedSelector = (store: AppSidebarStore) => store.setIsOpened
export const toggleSelector = (store: AppSidebarStore) => store.toggle
