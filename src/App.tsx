import { ConfigProvider } from 'antd'
import { QueryClientProvider } from 'react-query'

import PageRouter from './setup/PageRouter'

import { queryClient } from './react-query/request'

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ConfigProvider componentSize="large">
        <PageRouter />
      </ConfigProvider>
    </QueryClientProvider>
  )
}

export default App
