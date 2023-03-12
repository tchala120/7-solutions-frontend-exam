import { Col, Row } from 'antd'
import { useParams } from 'react-router-dom'

import useProductQuery from 'src/react-query/useProductQuery'

import ProductDetailImages from './Images'
import ProductDetailGeneral from './General'
import ProductDetailPrice from './Price'
import SkeletonLoading from './SkeletonLoading'

const ProductDetail = () => {
  const params = useParams()
  const productID = Number(params.id)

  const productQuery = useProductQuery({
    enabled: !Number.isNaN(productID),
    variables: {
      id: productID,
    },
  })

  const product = productQuery.data

  if (productQuery.isLoading || product == null) {
    return <SkeletonLoading />
  }

  return (
    <Row gutter={[32, 32]}>
      <Col span={24}>
        <ProductDetailImages images={product.images} />
      </Col>

      <Col md={12} xs={24}>
        <ProductDetailGeneral data={product} />
      </Col>
      <Col md={12} xs={24}>
        <ProductDetailPrice data={product} />
      </Col>
    </Row>
  )
}

export default ProductDetail
