import { CreateTransactionPage } from '@/pages/CreateTransactionPage'
import { UpdateTransactionPage } from '@/pages/UpdateTransactionPage'
import { createBrowserRouter } from 'react-router-dom'
import { HomePage } from '@/pages/HomePage'

export const routing = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/transactions/create',
    element: <CreateTransactionPage />
  },
  {
    path: '/transactions/:id/update',
    element: <UpdateTransactionPage />
  },
  {
    path: '*',
    element: <></>
  }
])
