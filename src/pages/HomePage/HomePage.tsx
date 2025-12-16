import { useStatisticsBalanceData, useStatisticsExpensesData, useStatisticsIncomesData, useSubscribeOnTransactions } from '@/features/statistics'
import { greenColor, primaryColor, redColor } from '@/app/theme'
import { BarChartSetup, LineChartSetup } from '@/features/charts'
import { CreateTransactionButton } from '@/features/modify-transaction'
import { useDisplayTransactions } from '@/features/display-transaction'
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
  
  const statisticsBalanceData = useStatisticsBalanceData()
  const statisticsIncomesData = useStatisticsIncomesData()
  const statisticsExpensesData = useStatisticsExpensesData()
  
  const { formatAmountAsUSD } = useDisplayTransactions()
  
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
            <Palette block round>
              <LineChartSetup 
                data={statisticsBalanceData}
                displayValueKey='Balance'
                valueFormatter={formatAmountAsUSD}
                color={primaryColor}
                displayYAxis
              />

              <BarChartSetup 
                data={statisticsIncomesData} 
                displayValueKey='Incomes' 
                valueFormatter={formatAmountAsUSD}
                color={greenColor} 
                displayYAxis
              />

              <BarChartSetup 
                data={statisticsExpensesData} 
                displayValueKey='Expenses' 
                valueFormatter={formatAmountAsUSD}
                color={redColor} 
                displayYAxis
              />
            </Palette>
          </Container>
        </Main>

        <FloatingArea>
          <CreateTransactionButton />
        </FloatingArea>
      </Wrapper>
    </Page>
  )
}
