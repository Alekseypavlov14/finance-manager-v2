import { useParams } from 'react-router-dom'

export function useTransactionId() {
  const id = useParams().id
  return id ? Number(id) : null
}
