import { CreateTransactionButton } from '@/features/modify-transaction'
import { TransactionsFeed } from '@/features/transactions-feed'
import { AppBurgerButton } from '@/widgets/AppBurgerButton'
import { FloatingArea } from '@/shared/components/FloatingArea'
import { HeaderLogo } from '@/widgets/HeaderLogo'
import { AppSidebar } from '@/widgets/AppSidebar'
import { Container } from '@/shared/components/Container'
import { Wrapper } from '@/shared/components/Wrapper'
import { Header } from '@/shared/components/Header'
import { Page } from '@/shared/components/Page'
import { Main } from '@/shared/components/Main'

export function TransactionsFeedPage() {
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
            <TransactionsFeed />
          </Container>
        </Main>

        <FloatingArea>
          <CreateTransactionButton />
        </FloatingArea>
      </Wrapper>
    </Page>
  )
}
