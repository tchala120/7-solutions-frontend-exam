import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShop } from '@fortawesome/free-solid-svg-icons'

const Logo = () => {
  return (
    <LogoContainer>
      <FontAwesomeIcon icon={faShop} />

      <h1>Shop</h1>
    </LogoContainer>
  )
}

export default Logo

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  h1 {
    font-weight: bold;
    margin: 0;
  }
`
