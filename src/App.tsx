import { StateLoaderLayout } from './layouts/StateLoaderLayout'
import { RouterProvider } from 'react-router-dom'
import { AntLayout } from '@/layouts/AntLayout'
import { routing } from '@/app/routing'

export function App() {
  return (
    <StateLoaderLayout>
      <AntLayout>
        <RouterProvider router={routing} />
      </AntLayout>
    </StateLoaderLayout>
  )
}
