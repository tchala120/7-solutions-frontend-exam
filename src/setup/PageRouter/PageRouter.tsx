import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import PageLayout from 'src/layouts/PageLayout'

import HomePage from 'src/pages/HomePage'

import { paths } from './routes'

const router = createBrowserRouter([
  {
    element: <PageLayout />,
    children: [
      {
        path: paths.home,
        element: <HomePage />,
      },
    ],
  },
])

const PageRouter = () => {
  return <RouterProvider router={router} />
}

export default PageRouter
