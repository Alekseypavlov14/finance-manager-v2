import { UpdateTransactionForm, useCurrentTransaction } from '@/features/modify-transaction'
import { Wrapper } from '@/shared/components/Wrapper'
import { Palette } from '@/shared/components/Palette'
import { Header } from '@/shared/components/Header'
import { Main } from '@/shared/components/Main'
import { Page } from '@/shared/components/Page'

export function UpdateTransactionPage() {
  const currentTransaction = useCurrentTransaction()
  return (
    <Page>
      <Wrapper>
        <Header>

        </Header>

        <Main>
          <Palette>
            {currentTransaction ? (
              <UpdateTransactionForm transaction={currentTransaction} />
            ) : null}
          </Palette>
        </Main>
      </Wrapper>
    </Page>
  )
}
