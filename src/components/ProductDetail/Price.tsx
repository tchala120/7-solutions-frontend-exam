import { Button, Col, notification, Row } from 'antd'
import { PlusOutlined } from '@ant-design/icons'

import PriceInfo from 'src/components/PriceInfo'
import ContentBlock from 'src/components/ContentBlock'
import DisplayValue from 'src/components/DisplayValue'
import { useCartDisplay } from 'src/components/CartDisplay'

import useCartContext from 'src/contexts/useCartContext'

import { numberFormat } from 'src/helpers/formatter'

import type { Product } from 'src/react-query/types'

interface ProductDetailPriceProps {
  data: Product
}

const ProductDetailPrice = ({ data }: ProductDetailPriceProps) => {
  const { open } = useCartDisplay()

  const { addNewItem } = useCartContext()

  return (
    <ContentBlock title="Price" noPadding>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <PriceInfo
            price={data.price}
            discountPercentage={data.discountPercentage}
          />
        </Col>

        <Col span={24}>
          <DisplayValue label="In Stock">
            {numberFormat(data.stock, '0,0')}
          </DisplayValue>
        </Col>

        <Col span={24}>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => {
              addNewItem(data)

              notification.open({
                message: `Added ${data.title} to cart`,
                duration: 3,
                key: 'add-new-item-notification',
                btn: (
                  <Button
                    type="primary"
                    size="small"
                    onClick={() => open(true)}
                  >
                    Open cart
                  </Button>
                ),
              })
            }}
          >
            Add to cart
          </Button>
        </Col>
      </Row>
    </ContentBlock>
  )
}

export default ProductDetailPrice
