import { ConfigProvider } from 'antd'

import PageRouter from './setup/PageRouter'

const App = () => {
  return (
    <ConfigProvider componentSize="large">
      <PageRouter />
    </ConfigProvider>
  )
}

export default App
