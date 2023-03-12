import { Button, Result } from 'antd'
import { paths } from 'src/setup/PageRouter/routes'
import styled from 'styled-components'

const PaymentSuccess = () => {
  return (
    <PaymentSuccessContainer>
      <Result
        status="success"
        title="Successfully Purchased Product!"
        subTitle="Order number: 2017182818828182881"
        extra={[
          <Button
            type="primary"
            key="back-to-home"
            onClick={() => {
              window.location.href = paths.home
            }}
          >
            Back to home
          </Button>,
        ]}
      />
    </PaymentSuccessContainer>
  )
}

export default PaymentSuccess

const PaymentSuccessContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
