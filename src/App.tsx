import { RouterProvider } from 'react-router-dom'
import { AntLayout } from '@/layouts/AntLayout'
import { routing } from '@/app/routing'

export function App() {
  return (
    <AntLayout>
      <RouterProvider router={routing} />
    </AntLayout>
  )
}
