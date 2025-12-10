import { CreateTransactionForm } from '@/features/modify-transaction'
import { AppBurgerButton } from '@/widgets/AppBurgerButton'
import { AppSidebar } from '@/widgets/AppSidebar'
import { Container } from '@/shared/components/Container'
import { Wrapper } from '@/shared/components/Wrapper'
import { Palette } from '@/shared/components/Palette'
import { Header } from '@/shared/components/Header'
import { Page } from '@/shared/components/Page'
import { Main } from '@/shared/components/Main'

export function HomePage() {
  return (
    <Page>
      <Wrapper>
        <Header>
          <AppBurgerButton />
        </Header>

        <AppSidebar />
      
        <Main>
          <Container>
            Home page

            <Palette block round>
              <CreateTransactionForm />
            </Palette>
          </Container>
        </Main>
      </Wrapper>
    </Page>
  )
}
