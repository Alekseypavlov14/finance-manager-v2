import { StatisticsBalanceChart, StatisticsBlocks, StatisticsCurrenciesChart, StatisticsExpensesChart, StatisticsIncomesChart, StatisticsSettings, useSubscribeOnTransactions } from '@/features/statistics'
import { CreateTransactionButton } from '@/features/modify-transaction'
import { RatesCalculator } from '@/features/rates-calculator'
import { AppBurgerButton } from '@/widgets/AppBurgerButton'
import { FloatingArea } from '@/shared/components/FloatingArea'
import { HeaderLogo } from '@/widgets/HeaderLogo'
import { AppSidebar } from '@/widgets/AppSidebar'
import { Container } from '@/shared/components/Container'
import { Palette } from '@/shared/components/Palette'
import { Wrapper } from '@/shared/components/Wrapper'
import { Header } from '@/shared/components/Header'
import { Page } from '@/shared/components/Page'
import { Main } from '@/shared/components/Main'

export function HomePage() {
  useSubscribeOnTransactions()
  
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
            <StatisticsBlocks>
              <Palette round block>
                <StatisticsCurrenciesChart />
              </Palette>

              <Palette round block>
                <StatisticsBalanceChart />
              </Palette>

              <Palette round block>
                <StatisticsIncomesChart />
              </Palette>

              <Palette round block>
                <StatisticsExpensesChart />
              </Palette>

              <Palette round block>
                <StatisticsSettings />
              </Palette>

              <Palette round block>
                <RatesCalculator />
              </Palette>
            </StatisticsBlocks>
          </Container>
        </Main>

        <FloatingArea>
          <CreateTransactionButton />
        </FloatingArea>
      </Wrapper>
    </Page>
  )
}
