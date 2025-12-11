import { setIsOpenedSelector, useAppSidebarStore } from '@/app/stores/app-sidebar'
import { Link } from 'react-router-dom'
import styles from './AppNavigation.module.css'

export function AppNavigation() {
  const setIsOpened = useAppSidebarStore(setIsOpenedSelector)

  function closeSidebar() {
    setIsOpened(false)
  }

  return (
    <div className={styles.AppNavigation}>
      <Link className={styles.Link} onClick={closeSidebar} to='/'>Home</Link>
      <Link className={styles.Link} onClick={closeSidebar} to='/transactions/feed'>Transactions</Link>
      <Link className={styles.Link} onClick={closeSidebar} to='/transactions/create'>Create transaction</Link>
      <Link className={styles.Link} onClick={closeSidebar} to='/settings'>Settings</Link>
    </div>
  )
}
