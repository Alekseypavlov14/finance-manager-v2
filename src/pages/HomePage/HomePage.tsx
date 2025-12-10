import { AppBurgerButton } from '@/widgets/AppBurgerButton'
import { AppSidebar } from '@/widgets/AppSidebar'
import { Container } from '@/shared/components/Container'
import { Wrapper } from '@/shared/components/Wrapper'
import { Header } from '@/shared/components/Header'
import { Page } from '@/shared/components/Page'
import { Main } from '@/shared/components/Main'
import { defaultTransactionFormData, TransactionForm } from '@/features/transaction-form'

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

            <TransactionForm 
              initialTransactionData={defaultTransactionFormData}
            />
          </Container>
        </Main>
      </Wrapper>
    </Page>
  )
}
