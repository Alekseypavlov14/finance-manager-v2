import { useStatisticsIncomesData, useSubscribeOnTransactions } from '@/features/statistics'
import { CreateTransactionButton } from '@/features/modify-transaction'
import { AppBurgerButton } from '@/widgets/AppBurgerButton'
import { formatAsMoney } from '@/shared/utils/formatters'
import { BarChartSetup } from '@/features/charts'
import { FloatingArea } from '@/shared/components/FloatingArea'
import { HeaderLogo } from '@/widgets/HeaderLogo'
import { AppSidebar } from '@/widgets/AppSidebar'
import { greenColor } from '@/app/theme'
import { Container } from '@/shared/components/Container'
import { Palette } from '@/shared/components/Palette'
import { Wrapper } from '@/shared/components/Wrapper'
import { Header } from '@/shared/components/Header'
import { Page } from '@/shared/components/Page'
import { Main } from '@/shared/components/Main'

export function HomePage() {
  const statisticsIncomesData = useStatisticsIncomesData()
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
            <Palette block round>
              <BarChartSetup 
                data={statisticsIncomesData} 
                tooltipLabel='Incomes'
                displayValueKey='Amount in USD' 
                valueFormatter={value => `${formatAsMoney(Number(value))} USD`}
                color={greenColor} 
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
