import { Button, Col, notification, Row, Space, Tag } from 'antd'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { sentenceCase } from 'change-case'

import PriceInfo from 'src/components/PriceInfo'
import Rating from 'src/components/Rating'
import { useCartDisplay } from 'src/components/CartDisplay'

import useCartContext from 'src/contexts/useCartContext'

import { routeTo } from 'src/helpers/utils'

import { paths } from 'src/setup/PageRouter/routes'

import type { Product } from 'src/react-query/types'

interface ProductItemProps {
  data: Product
}

const ProductItem = ({ data }: ProductItemProps) => {
  const { open } = useCartDisplay()

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

            <Rating value={data.rating} />

            <PriceInfo
              price={data.price}
              discountPercentage={data.discountPercentage}
            />
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

              notification.open({
                message: `Added ${data.title} to cart`,
                duration: 3,
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
