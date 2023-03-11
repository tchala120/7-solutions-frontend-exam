import { Layout } from 'antd'
import { Outlet } from 'react-router-dom'

import Footer from 'src/components/Footer'
import Header from 'src/components/Header'
import styled from 'styled-components'

const PageLayout = () => {
  return (
    <Layout
      style={{
        width: '100%',
        minHeight: '100vh',
      }}
    >
      <Header />

      <Content>
        <Outlet />
      </Content>

      <Footer />
    </Layout>
  )
}

export default PageLayout

const Content = styled(Layout.Content)`
  --padding-horizontal: 50px;

  padding: 24px var(--padding-horizontal);

  @media screen and (max-width: 768px) {
    --padding-horizontal: 24px;
  }
`
