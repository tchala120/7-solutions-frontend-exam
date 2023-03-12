import { Col, Row, Skeleton } from 'antd'
import { useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'

import ProductListControl from './Control'
import ProductListItem from './ListItem'
import SkeletonLoading from './SkeletonLoading'

import useListProductsQuery from 'src/react-query/useListProductsQuery'

import type { Product } from 'src/react-query/types'

const listProductLimit = 10

const ProductList = () => {
  const { data, pagination, shouldLoadMoreContent, onSearch, onNextLoad } =
    useProductList()

  return (
    <InfiniteScroll
      dataLength={pagination.total}
      next={onNextLoad}
      hasMore={shouldLoadMoreContent}
      loader={
        <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
          <Col md={12} xs={24}>
            <Skeleton.Input
              style={{
                height: 130,
              }}
              active
              block
            />
          </Col>
          <Col span={12}>
            <Skeleton.Input
              style={{
                height: 130,
              }}
              active
              block
            />
          </Col>
        </Row>
      }
    >
      <Row gutter={[16, 16]}>
        <ProductListControl
          searchResultTotalItems={pagination.total}
          onSearch={onSearch}
        />

        {data == null ? (
          <SkeletonLoading />
        ) : (
          <ProductListItem listProducts={data} />
        )}
      </Row>
    </InfiniteScroll>
  )
}

export default ProductList

const useProductList = () => {
  const [searchKeyword, setSearchKeyword] = useState<string>()
  const [skip, setSkip] = useState(0)

  const [listProducts, setListProducts] = useState<Product[]>()

  const listProductsQuery = useListProductsQuery({
    variables: {
      search: searchKeyword,
      limit: listProductLimit,
      skip,
    },
    onSuccess(data) {
      setListProducts((prev) =>
        Array.isArray(prev) ? [...prev, ...data.products] : data.products
      )
    },
  })

  const total = listProductsQuery.data?.total || 0

  const changeToFirstPage = () => {
    setSkip(0)
    setListProducts(undefined)
  }

  return {
    loading: listProductsQuery.isLoading,
    query: listProductsQuery,
    data: listProducts,
    searchKeyword,
    pagination: {
      skip,
      total,
    },
    shouldLoadMoreContent:
      searchKeyword == null || (searchKeyword === '' && skip < total),
    changeToFirstPage,
    onSearch(value: string) {
      changeToFirstPage()

      setSearchKeyword(value)
    },
    onNextLoad() {
      setSkip((prev) => prev + listProductLimit)
    },
  }
}
