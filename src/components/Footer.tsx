import { Layout } from 'antd'
import styled from 'styled-components'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
  return (
    <FooterContainer>
      <div className="inner-footer-container">
        <div className="copyright-container">
          <FontAwesomeIcon icon={faCopyright} />
          <span>{new Date().getFullYear()}</span>
          <span>Panupong.</span>
        </div>

        <Version>Version {import.meta.env.VITE_VERSION}</Version>
      </div>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled(Layout.Footer)`
  background: #fff;

  .inner-footer-container,
  .copyright-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }

  .inner-footer-container {
    flex-direction: column;
    width: 100%;
    max-width: 768px;
    margin: 0 auto;
    color: #3c3c3c;
  }

  @media screen and (max-width: 768px) {
    padding: 24px;
  }
`

const Version = styled.div`
  color: #999;
`
