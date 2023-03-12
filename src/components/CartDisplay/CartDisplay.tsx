import { Button, Drawer, type DrawerProps } from 'antd'
import { useState } from 'react'

import useCartContext from 'src/contexts/useCartContext'

import { delay } from 'src/helpers/utils'

import { paths } from 'src/setup/PageRouter/routes'

import BillTableInfo from './BillTableInfo'
import CartDisplayTable from './Table'

import useCartDisplay, { useCartDisplaySubscribe } from './useCartDisplay'

export type CartDisplayProps = Omit<DrawerProps, 'title' | 'footer'>

const CartDisplay = (props: CartDisplayProps) => {
  const { open } = useCartDisplay()

  const { totalSelectedItems } = useCartContext()

  const [loading, setLoading] = useState(false)

  const onClose = () => open(false)

  return (
    <Drawer
      title="Your Cart"
      drawerStyle={{
        maxWidth: '768px',
      }}
      contentWrapperStyle={{
        maxWidth: '768px',
      }}
      width="100%"
      footer={
        <div
          style={{
            textAlign: 'right',
          }}
        >
          <Button
            type="primary"
            loading={loading}
            disabled={totalSelectedItems === 0}
            onClick={async () => {
              setLoading(true)

              await delay(2000)

              setLoading(false)

              await delay(500)

              window.location.href = paths.paymentSuccess
            }}
          >
            Confirm Order
          </Button>
        </div>
      }
      destroyOnClose
      onClose={onClose}
      {...props}
    >
      <CartDisplayTable />

      <BillTableInfo />
    </Drawer>
  )
}

export default CartDisplay

export const BoardcastCartDisplay = () => {
  const { children, ...props } = useCartDisplaySubscribe()

  return <CartDisplay {...props}>{children}</CartDisplay>
}
