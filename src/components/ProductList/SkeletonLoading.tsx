import { Col, Skeleton } from 'antd'

const SkeletonLoading = () => {
  return (
    <>
      {Array(10)
        .fill(1)
        .map((_, index) => (
          <Col key={index} md={12} xs={24}>
            <Skeleton.Input
              style={{
                height: 130,
              }}
              active
              block
            />
          </Col>
        ))}
    </>
  )
}

export default SkeletonLoading
