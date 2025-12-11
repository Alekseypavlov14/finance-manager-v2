import { UpdateTransactionForm, useCurrentTransaction } from '@/features/modify-transaction'
import { HeaderLogo } from '@/widgets/HeaderLogo'
import { Container } from '@/shared/components/Container'
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
          <HeaderLogo />
        </Header>

        <Main>
          <Container>
            <Palette round block>
              {currentTransaction ? (
                <UpdateTransactionForm transaction={currentTransaction} />
              ) : null}
            </Palette>
          </Container>
        </Main>
      </Wrapper>
    </Page>
  )
}
