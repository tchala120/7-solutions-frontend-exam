import { Layout } from 'antd'
import styled from 'styled-components'

import Logo from 'src/components/Logo'

const Header = () => {
  return (
    <HeaderContainer>
      <div className="inner-header-container">
        <Logo />
      </div>
    </HeaderContainer>
  )
}

export default Header

const HeaderContainer = styled(Layout.Header)`
  background: #fff;

  .inner-header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 768px;
    height: 100%;
    margin: 0 auto;
  }

  @media screen and (max-width: 768px) {
    padding: 0px 24px;
  }
`
