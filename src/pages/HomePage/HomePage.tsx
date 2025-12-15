import { useStatisticsExpensesData, useStatisticsIncomesData, useSubscribeOnTransactions } from '@/features/statistics'
import { CreateTransactionButton } from '@/features/modify-transaction'
import { greenColor, redColor } from '@/app/theme'
import { AppBurgerButton } from '@/widgets/AppBurgerButton'
import { formatAsMoney } from '@/shared/utils/formatters'
import { BarChartSetup } from '@/features/charts'
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

  const statisticsIncomesData = useStatisticsIncomesData()
  const statisticsExpensesData = useStatisticsExpensesData()

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
              <BarChartSetup 
                data={statisticsIncomesData} 
                displayValueKey='Incomes' 
                valueFormatter={value => `${formatAsMoney(Number(value))} USD`}
                color={greenColor} 
              />

              <BarChartSetup 
                data={statisticsExpensesData} 
                displayValueKey='Expenses' 
                valueFormatter={value => `${formatAsMoney(Number(value))} USD`}
                color={redColor} 
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
