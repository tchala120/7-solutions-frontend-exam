import { Button, Col, message, Rate, Row, Space, Tag } from 'antd'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { sentenceCase } from 'change-case'

import useCartContext from 'src/contexts/useCartContext'

import { moneyFormat } from 'src/helpers/formatter'
import { routeTo } from 'src/helpers/utils'

import { paths } from 'src/setup/PageRouter/routes'

import type { Product } from 'src/react-query/types'

interface ProductItemProps {
  data: Product
}

const ProductItem = ({ data }: ProductItemProps) => {
  const { addNewItem } = useCartContext()

  const navigate = useNavigate()

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

      <ProductClickableContainer
        onClick={() => {
          navigate(
            routeTo(paths.productDetail, {
              params: {
                id: data.id,
              },
            })
          )
        }}
      />

      <AddToCartContainer>
        <Space>
          <Button
            size="middle"
            shape="circle"
            type="primary"
            danger
            onClick={() => {
              addNewItem(data)

              message.success(`${data.title} added to cart`)
            }}
          >
            <FontAwesomeIcon icon={faPlus} />
          </Button>
        </Space>
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
  transition: all 0.25s ease-in-out;

  &:hover {
    box-shadow: 0 10px 20px #eee;
  }
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
  z-index: 3;
`

const ProductClickableContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  opacity: 0;
  cursor: pointer;
`
