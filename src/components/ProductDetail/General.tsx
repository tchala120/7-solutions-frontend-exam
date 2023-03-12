import { Col, Rate, Row, Space, Tag } from 'antd'
import styled from 'styled-components'
import { sentenceCase } from 'change-case'

import ContentBlock from 'src/components/ContentBlock'
import DisplayValue from 'src/components/DisplayValue'
import Rating from 'src/components/Rating'

import type { Product } from 'src/react-query/types'

interface ProductDetailGeneralProps {
  data: Pick<Product, 'title' | 'description' | 'category' | 'brand' | 'rating'>
}

const ProductDetailGeneral = ({ data }: ProductDetailGeneralProps) => {
  return (
    <ContentBlock title={data.title} noPadding>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <span>{data.description.replace('...', '')}</span>
        </Col>

        <Col span={24}>
          <Rating value={data.rating} />
        </Col>

        <Col span={24}>
          <DisplayValue label="Brand">
            <Tag color="orange">{data.brand}</Tag>
          </DisplayValue>
        </Col>

        <Col span={24}>
          <DisplayValue label="Category">
            <Tag color="cyan">{sentenceCase(data.category)}</Tag>
          </DisplayValue>
        </Col>
      </Row>
    </ContentBlock>
  )
}

export default ProductDetailGeneral

const Title = styled.strong`
  font-size: 24px;
`
