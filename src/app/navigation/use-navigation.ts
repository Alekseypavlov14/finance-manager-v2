import type { Id } from '@/shared/types/entity'
import { useNavigate } from 'react-router-dom'

export function useNavigation() {
  const navigate = useNavigate()

  return ({
    navigateHomePage: () => navigate('/'),
    navigateCreateTransactionPage: () => navigate('/transactions/create'),
    navigateUpdateTransactionPage: (id: Id) => navigate(`/transactions/${id}/update`),
  })
}
