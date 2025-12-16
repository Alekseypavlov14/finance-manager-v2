import { Wrapper } from '@/shared/components/Wrapper'
import { Page } from '@/shared/components/Page'
import { Link } from 'react-router-dom'
import styles from './NotFoundPage.module.css'

export function NotFoundPage() {
  return (
    <Page>
      <Wrapper className={styles.NotFoundWrapper}>
        <div className={styles.NotFoundBlock}>
          <div className={styles.NotFoundTitle}>404 | Not found</div>
          <Link className={styles.NotFoundLink} to={'/'}>This page does not exist. Navigate back</Link>
        </div>
      </Wrapper>
    </Page>
  )
}
