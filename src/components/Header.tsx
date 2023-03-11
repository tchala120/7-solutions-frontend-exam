import { Badge, Layout } from 'antd'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

import Logo from 'src/components/Logo'
import { useCartDisplay } from 'src/components/CartDisplay'

import useCartContext from 'src/contexts/useCartContext'

const Header = () => {
  const { totalItemsInCart } = useCartContext()

  const { open } = useCartDisplay()

  return (
    <HeaderContainer>
      <div className="inner-header-container">
        <Logo />

        <div
          style={{
            cursor: 'pointer',
          }}
          onClick={() => open(true)}
        >
          <Badge count={totalItemsInCart}>
            <FontAwesomeIcon icon={faCartShopping} fontSize={20} />
          </Badge>
        </div>
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
