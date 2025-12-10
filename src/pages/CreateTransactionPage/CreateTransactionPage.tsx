import { CreateTransactionForm } from '@/features/modify-transaction'
import { Wrapper } from '@/shared/components/Wrapper'
import { Palette } from '@/shared/components/Palette'
import { Header } from '@/shared/components/Header'
import { Page } from '@/shared/components/Page'
import { Main } from '@/shared/components/Main'

export function CreateTransactionPage() {
  return (
    <Page>
      <Wrapper>
        <Header>

        </Header>

        <Main>
          <Palette>
            <CreateTransactionForm />
          </Palette>
        </Main>
      </Wrapper>
    </Page>
  )
}
