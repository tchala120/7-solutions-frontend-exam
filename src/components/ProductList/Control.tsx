import { Col, Input, Space, Spin } from 'antd'

interface ProductListControlProps {
  searchResultTotalItems?: number
  onSearch?: (value: string) => void
}

const ProductListControl = ({
  searchResultTotalItems,
  onSearch,
}: ProductListControlProps) => {
  return (
    <>
      <Col span={24}>
        <Input.Search
          placeholder="iPhone 9"
          onSearch={onSearch}
          allowClear
          enterButton
        />
      </Col>

      <Col span={24}>
        <Space>
          <strong>Showing result:</strong>

          <strong>
            {typeof searchResultTotalItems === 'number' ? (
              searchResultTotalItems
            ) : (
              <Spin size="small" />
            )}
          </strong>
        </Space>
      </Col>
    </>
  )
}

export default ProductListControl
