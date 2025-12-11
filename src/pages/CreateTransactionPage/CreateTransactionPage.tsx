import { CreateTransactionForm } from '@/features/modify-transaction'
import { AppBurgerButton } from '@/widgets/AppBurgerButton'
import { useNavigation } from '@/app/navigation'
import { HeaderLogo } from '@/widgets/HeaderLogo'
import { AppSidebar } from '@/widgets/AppSidebar'
import { Container } from '@/shared/components/Container'
import { Wrapper } from '@/shared/components/Wrapper'
import { Palette } from '@/shared/components/Palette'
import { Header } from '@/shared/components/Header'
import { Page } from '@/shared/components/Page'
import { Main } from '@/shared/components/Main'

export function CreateTransactionPage() {
  const { navigateTransactionsFeedPage } = useNavigation()

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
              <CreateTransactionForm onSave={navigateTransactionsFeedPage} />
            </Palette>
          </Container>
        </Main>
      </Wrapper>
    </Page>
  )
}
