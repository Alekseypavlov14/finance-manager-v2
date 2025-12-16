import { StatisticsBlock, StatisticsBlockLabel, StatisticsBlocks, useStatisticsBalanceData, useStatisticsCurrenciesData, useStatisticsExpensesData, useStatisticsIncomesData, useSubscribeOnTransactions } from '@/features/statistics'
import { BarChartSetup, getOptimalDataDomain, getPeaksFromSample, LineChartSetup } from '@/features/charts'
import { greenColor, primaryColor, redColor } from '@/app/theme'
import { CreateTransactionButton } from '@/features/modify-transaction'
import { useDisplayTransactions } from '@/features/display-transaction'
import { AppBurgerButton } from '@/widgets/AppBurgerButton'
import { PieChartSetup } from '@/features/charts/setups/PieChartSetup'
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
  
  const statisticsCurrenciesData = useStatisticsCurrenciesData()
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
            <StatisticsBlocks>
              <Palette round block>
                <StatisticsBlock>
                  <StatisticsBlockLabel>Currencies</StatisticsBlockLabel>
  
                  <PieChartSetup 
                    data={statisticsCurrenciesData}
                    valueFormatter={formatAmountAsUSD}
                    colors={[ greenColor, redColor, primaryColor ]}
                  />
                </StatisticsBlock>
              </Palette>

              <Palette round block>
                <StatisticsBlock>
                  <StatisticsBlockLabel>Balance</StatisticsBlockLabel>
                  
                  <LineChartSetup 
                    data={statisticsBalanceData}
                    displayValueKey='Balance'
                    valueFormatter={formatAmountAsUSD}
                    dataDomain={getOptimalDataDomain(...getPeaksFromSample(statisticsBalanceData.map(data => data.value)))}
                    color={primaryColor}
                    displayYAxis
                  />
                </StatisticsBlock>
              </Palette>

              <Palette round block>
                <StatisticsBlock>
                  <StatisticsBlockLabel>Incomes</StatisticsBlockLabel>
  
                  <BarChartSetup 
                    data={statisticsIncomesData} 
                    displayValueKey='Incomes' 
                    valueFormatter={formatAmountAsUSD}
                    color={greenColor} 
                    displayYAxis
                  />
                </StatisticsBlock>
              </Palette>

              <Palette round block>
                <StatisticsBlock>
                  <StatisticsBlockLabel>Expenses</StatisticsBlockLabel>
  
                  <BarChartSetup 
                    data={statisticsExpensesData} 
                    displayValueKey='Expenses' 
                    valueFormatter={formatAmountAsUSD}
                    color={redColor} 
                    displayYAxis
                  />
                </StatisticsBlock>
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
