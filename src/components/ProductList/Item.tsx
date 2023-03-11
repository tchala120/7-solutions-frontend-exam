import { Button, Col, Rate, Row, Space, Tag } from 'antd'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { sentenceCase } from 'change-case'

import { moneyFormat } from 'src/helpers/formatter'

import type { Product } from 'src/react-query/types'

interface ProductItemProps {
  data: Product
}

const ProductItem = ({ data }: ProductItemProps) => {
  return (
    <ProductItemContainer>
      <Row gutter={[16, 16]} align="top">
        <Col span={8}>
          <CardImageCover alt={data.title} src={data.thumbnail} />
        </Col>

        <Col span={16}>
          <ProductInformationContainer>
            <strong>{data.title}</strong>
            <div>
              <Tag color="blue">{sentenceCase(data.category)}</Tag>
            </div>
            <Space>
              <Rate allowHalf disabled value={data.rating} />{' '}
              <span
                style={{
                  fontSize: 12,
                  color: '#999',
                }}
              >
                ({data.rating})
              </span>
            </Space>

            <Space align="end">
              <strong>
                {moneyFormat(data.price, {
                  prefix: '$',
                })}
              </strong>
              <PercentOf>{data.discountPercentage}% off</PercentOf>
            </Space>
          </ProductInformationContainer>
        </Col>
      </Row>

      <AddToCartContainer>
        <Button shape="circle" type="primary" danger>
          <FontAwesomeIcon icon={faPlus} />
        </Button>
      </AddToCartContainer>
    </ProductItemContainer>
  )
}

export default ProductItem

const CardImageCover = styled.img`
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
`

const ProductItemContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 12px;
  border-radius: 6px;
  background: #fff;
  position: relative;
`

const ProductInformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

const PercentOf = styled.strong`
  color: #00aa36;
  font-size: 12px;
`

const AddToCartContainer = styled.div`
  position: absolute;
  right: 12px;
  bottom: 12px;
`
