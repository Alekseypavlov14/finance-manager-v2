import { CreateTransactionForm } from '@/features/modify-transaction'
import { AppBurgerButton } from '@/widgets/AppBurgerButton'
import { AppSidebar } from '@/widgets/AppSidebar'
import { Container } from '@/shared/components/Container'
import { Wrapper } from '@/shared/components/Wrapper'
import { Palette } from '@/shared/components/Palette'
import { Header } from '@/shared/components/Header'
import { Page } from '@/shared/components/Page'
import { Main } from '@/shared/components/Main'
import { UpdateTransactionForm } from '@/features/modify-transaction/setups/UpdateTransactionForm'
import type { TransactionEntity } from '@/entities/transactions'

const transaction: TransactionEntity = {
  id: 0,
  
  type: 'deposit',
  description: '',

  received: {
    amount: 10,
    currencyId: 1,
  },
  lost: {
    amount: 20,
    currencyId: 2,
  },
  date: Date.now()
}

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

              <UpdateTransactionForm transaction={transaction} />
            </Palette>
          </Container>
        </Main>
      </Wrapper>
    </Page>
  )
}
