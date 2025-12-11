import { FloatingAreaButton } from '@/shared/components/FloatingAreaButton'
import { useNavigation } from '@/app/navigation'
import plusIcon from './plus.svg'

export function CreateTransactionButton() {
  const { navigateCreateTransactionPage } = useNavigation()

  return (
    <FloatingAreaButton 
      onClick={navigateCreateTransactionPage}
      filled 
    >
      <img src={plusIcon} />
    </FloatingAreaButton>
  )
}
