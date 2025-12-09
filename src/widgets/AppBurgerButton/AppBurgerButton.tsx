import { isOpenedSelector, toggleSelector, useAppSidebarStore } from '@/app/stores/app-sidebar'
import { BurgerButton } from '@/shared/components/BurgerButton'

export function AppBurgerButton() {
  const isOpened = useAppSidebarStore(isOpenedSelector)
  const toggle = useAppSidebarStore(toggleSelector)

  function clickHandler() {
    toggle()
  }

  return (
    <BurgerButton 
      onClick={clickHandler}
      isActive={isOpened} 
    />
  )
}
