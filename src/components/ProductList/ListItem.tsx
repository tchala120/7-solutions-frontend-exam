import { Col } from 'antd'

import ProductItem from './Item'
import ProductNotFound from './NotFound'

import type { Product } from 'src/react-query/types'

interface ProductListItemProps {
  listProducts?: Product[]
}

const ProductListItem = ({ listProducts }: ProductListItemProps) => {
  return (
    <>
      {listProducts?.length === 0 ? (
        <ProductNotFound>Product not found</ProductNotFound>
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
