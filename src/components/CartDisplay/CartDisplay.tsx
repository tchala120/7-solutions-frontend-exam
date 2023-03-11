import { Button, Drawer, type DrawerProps } from 'antd'

import useCartContext from 'src/contexts/useCartContext'

import BillTableInfo from './BillTableInfo'
import CartDisplayTable from './Table'

import useCartDisplay, { useCartDisplaySubscribe } from './useCartDisplay'

export type CartDisplayProps = Omit<DrawerProps, 'title' | 'footer'>

const CartDisplay = (props: CartDisplayProps) => {
  const { open } = useCartDisplay()

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
          <Button type="primary">Confirm Order</Button>
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
