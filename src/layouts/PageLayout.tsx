import { Layout } from 'antd'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

import Footer from 'src/components/Footer'
import Header from 'src/components/Header'
import { BoardcastCartDisplay } from 'src/components/CartDisplay'

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
        <div className="inner-content-container">
          <Outlet />
        </div>

        <BoardcastCartDisplay />
      </Content>

      <Footer />
    </Layout>
  )
}

export default PageLayout

const Content = styled(Layout.Content)`
  --padding-horizontal: 50px;

  padding: 24px var(--padding-horizontal);

  .inner-content-container {
    max-width: 768px;
    width: 100%;
    margin: 0 auto;
  }

  @media screen and (max-width: 768px) {
    --padding-horizontal: 24px;
  }
`
