import { Col, Row, Skeleton } from 'antd'

const SkeletonLoading = () => {
  return (
    <Row gutter={[32, 32]}>
      <Col span={24}>
        <Skeleton.Input
          active
          block
          style={{
            height: 240,
          }}
        />
      </Col>

      <Col md={12} xs={24}>
        <Skeleton.Input
          active
          block
          style={{
            width: '100%',
            height: 180,
          }}
        />
      </Col>

      <Col md={12} xs={24}>
        <Skeleton.Input
          active
          block
          style={{
            width: '100%',
            height: 180,
          }}
        />
      </Col>
    </Row>
  )
}

export default SkeletonLoading
