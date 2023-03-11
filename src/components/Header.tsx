import { Layout } from 'antd'
import styled from 'styled-components'

import Logo from 'src/components/Logo'

const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
    </HeaderContainer>
  )
}

export default Header

const HeaderContainer = styled(Layout.Header)`
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    padding: 0px 24px;
  }
`
