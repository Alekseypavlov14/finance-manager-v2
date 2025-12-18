import { CreateTransactionPage } from '@/pages/CreateTransactionPage'
import { UpdateTransactionPage } from '@/pages/UpdateTransactionPage'
import { TransactionsFeedPage } from '@/pages/TransactionsFeedPage'
import { createBrowserRouter } from 'react-router-dom'
import { CurrenciesPage } from '@/pages/CurrenciesPage'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { SettingsPage } from '@/pages/SettingsPage'
import { HomePage } from '@/pages/HomePage'

export const routing = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/transactions/feed',
    element: <TransactionsFeedPage />
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
    path: '/currencies',
    element: <CurrenciesPage />
  },
  {
    path: '/settings',
    element: <SettingsPage />
  },
  {
    path: '*',
    element: <NotFoundPage />
  }
])
