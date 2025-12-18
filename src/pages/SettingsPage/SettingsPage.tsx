import { AppBurgerButton } from '@/widgets/AppBurgerButton'
import { AppSidebar } from '@/widgets/AppSidebar'
import { HeaderLogo } from '@/widgets/HeaderLogo'
import { Wrapper } from '@/shared/components/Wrapper'
import { Header } from '@/shared/components/Header'
import { Page } from '@/shared/components/Page'
import { Main } from '@/shared/components/Main'

export function SettingsPage() {
  return (
    <Page>
      <Wrapper>
        <Header>
          <HeaderLogo />

          <AppBurgerButton />
        </Header>

        <AppSidebar />

        <Main>

        </Main>
      </Wrapper>
    </Page>
  )
}
