import { Layout } from 'antd'
import styled from 'styled-components'

const Footer = () => {
  return <FooterContainer>This is footer</FooterContainer>
}

export default Footer

const FooterContainer = styled(Layout.Footer)`
  @media screen and (max-width: 768px) {
    padding: 24px;
  }
`
