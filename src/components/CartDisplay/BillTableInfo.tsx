import styled from 'styled-components'

import useCartContext from 'src/contexts/useCartContext'

import { moneyFormat } from 'src/helpers/formatter'

const BillTableInfo = () => {
  const { summaryPrice } = useCartContext()

  return (
    <BillTableInfoContainer>
      <tbody>
        <tr>
          <td className="align-text-left">Total price</td>

          <td className="align-text-right">
            {moneyFormat(summaryPrice, {
              prefix: '$',
            })}
          </td>
        </tr>
      </tbody>
    </BillTableInfoContainer>
  )
}

export default BillTableInfo

const BillTableInfoContainer = styled.table`
  width: 100%;
  margin-top: 32px;

  .align-text-left {
    text-align: left;
  }

  .align-text-right {
    text-align: right;
  }

  td {
    font-weight: bold;
  }
`
