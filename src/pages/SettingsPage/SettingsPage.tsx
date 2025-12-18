import { AppBurgerButton } from '@/widgets/AppBurgerButton'
import { SettingsForm } from '@/features/settings'
import { AppSidebar } from '@/widgets/AppSidebar'
import { HeaderLogo } from '@/widgets/HeaderLogo'
import { Container } from '@/shared/components/Container'
import { Wrapper } from '@/shared/components/Wrapper'
import { Palette } from '@/shared/components/Palette'
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
          <Container>
            <Palette round block>
              <SettingsForm />
            </Palette>
          </Container>
        </Main>
      </Wrapper>
    </Page>
  )
}
