import { isOpenedSelector, useAppSidebarStore } from '@/app/stores/app-sidebar'
import { AppNavigation } from '../AppNavigation'
import { Container } from '@/shared/components/Container'
import { Sidebar } from '@/shared/components/Sidebar'
import styles from './AppSidebar.module.css'

export function AppSidebar() {
  const isOpened = useAppSidebarStore(isOpenedSelector)

  return (
    <Sidebar isOpened={isOpened}>
      <Container className={styles.Container}>
        <AppNavigation />
      </Container>
    </Sidebar>
  )
}
