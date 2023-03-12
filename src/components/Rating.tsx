import { Rate, RateProps, Space } from 'antd'

const Rating = (props: RateProps) => {
  return (
    <Space>
      <Rate allowHalf disabled {...props} />
      <span
        style={{
          fontSize: 12,
          color: '#999',
        }}
      >
        ({props.value})
      </span>
    </Space>
  )
}

export default Rating
