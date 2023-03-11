import { Col, Row } from 'antd'

import ProductItem from './Item'
import NotFound from './NotFound'

import type { Product } from 'src/react-query/types'

interface ProductListItemProps {
  listProducts?: Product[]
}

const ProductListItem = ({ listProducts }: ProductListItemProps) => {
  return (
    <>
      {listProducts?.length === 0 ? (
        <NotFound>Product not found</NotFound>
      ) : (
        listProducts?.map((product) => (
          <Col key={product.id} md={12} xs={24}>
            <ProductItem data={product} />
          </Col>
        ))
      )}
    </>
  )
}

export default ProductListItem
