import { ConfigProvider } from 'antd'
import { QueryClientProvider } from 'react-query'

import { CartProvider } from './contexts/useCartContext'

import PageRouter from './setup/PageRouter'

import { queryClient } from './react-query/request'

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ConfigProvider componentSize="large">
        <CartProvider>
          <PageRouter />
        </CartProvider>
      </ConfigProvider>
    </QueryClientProvider>
  )
}

export default App
