import type { ReactNode } from 'react'

import { Space } from 'antd'

interface DisplayValueProps {
  label: ReactNode
  children: ReactNode
}

const DisplayValue = ({ label, children }: DisplayValueProps) => {
  return (
    <Space split=":">
      <strong>{label}</strong>

      {children}
    </Space>
  )
}

export default DisplayValue
