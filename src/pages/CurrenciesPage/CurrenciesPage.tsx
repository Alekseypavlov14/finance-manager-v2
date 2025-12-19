import { AppBurgerButton } from '@/widgets/AppBurgerButton'
import { CurrenciesForm } from '@/features/modify-currencies'
import { HeaderLogo } from '@/widgets/HeaderLogo'
import { AppSidebar } from '@/widgets/AppSidebar'
import { Container } from '@/shared/components/Container'
import { Palette } from '@/shared/components/Palette'
import { Wrapper } from '@/shared/components/Wrapper'
import { Header } from '@/shared/components/Header'
import { Main } from '@/shared/components/Main'
import { Page } from '@/shared/components/Page'

export function CurrenciesPage() {
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
              <CurrenciesForm />
            </Palette>
          </Container>
        </Main>
      </Wrapper>
    </Page>
  )
}
