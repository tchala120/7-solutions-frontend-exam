import { Space } from 'antd'
import styled from 'styled-components'

import { moneyFormat } from 'src/helpers/formatter'

interface PriceInfoProps {
  price: number
  discountPercentage: number
}

const PriceInfo = ({ price, discountPercentage }: PriceInfoProps) => {
  return (
    <Space align="end">
      <strong>
        {moneyFormat(price, {
          prefix: '$',
        })}
      </strong>
      <PercentOf>{discountPercentage}% off</PercentOf>
    </Space>
  )
}

export default PriceInfo

const PercentOf = styled.strong`
  color: #00aa36;
  font-size: 12px;
`
