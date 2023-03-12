import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShop } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

import { paths } from 'src/setup/PageRouter/routes'

const Logo = () => {
  return (
    <Link to={paths.home}>
      <LogoContainer>
        <FontAwesomeIcon icon={faShop} />

        <h1>Shop</h1>
      </LogoContainer>
    </Link>
  )
}

export default Logo

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  color: #000;

  h1 {
    font-weight: bold;
    margin: 0;
  }
`
