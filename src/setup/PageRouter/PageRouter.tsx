import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import PageLayout from 'src/layouts/PageLayout'

import HomePage from 'src/pages/HomePage'
import ProductDetailPage from 'src/pages/ProductDetailPage'

import { paths } from './routes'

const router = createBrowserRouter([
  {
    element: <PageLayout />,
    children: [
      {
        path: paths.home,
        element: <HomePage />,
      },
      {
        path: paths.productDetail,
        element: <ProductDetailPage />,
      },
    ],
  },
])

const PageRouter = () => {
  return <RouterProvider router={router} />
}

export default PageRouter
