import { Button, Col, Row } from 'antd'
import { PlusOutlined } from '@ant-design/icons'

import PriceInfo from 'src/components/PriceInfo'
import ContentBlock from 'src/components/ContentBlock'
import DisplayValue from 'src/components/DisplayValue'

import useCartContext from 'src/contexts/useCartContext'

import { numberFormat } from 'src/helpers/formatter'

import type { Product } from 'src/react-query/types'

interface ProductDetailPriceProps {
  data: Product
}

const ProductDetailPrice = ({ data }: ProductDetailPriceProps) => {
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
            onClick={() => addNewItem(data)}
          >
            Add to cart
          </Button>
        </Col>
      </Row>
    </ContentBlock>
  )
}

export default ProductDetailPrice
