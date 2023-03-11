import type { ColumnsType } from 'antd/es/table'

import { Table, Tag, theme, type TableProps } from 'antd'
import { sentenceCase } from 'change-case'
import { Link } from 'react-router-dom'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import useCartContext from 'src/contexts/useCartContext'

import { moneyFormat, numberFormat } from 'src/helpers/formatter'

import type { Product } from 'src/react-query/types'

interface RecordType extends Product {
  quantity: number
  totalPrice: number
}

const { useToken } = theme

const CartDisplayTable = (props: Omit<TableProps<RecordType>, 'columns'>) => {
  const { token } = useToken()

  const { itemsInCart, deleteItem, selectItem } = useCartContext()

  const columns: ColumnsType<RecordType> = [
    {
      title: 'Image',
      width: 75,
      render(_, record) {
        return (
          <img
            style={{
              aspectRatio: '1/1',
              objectFit: 'cover',
              width: 75,
              height: 75,
            }}
            src={record.thumbnail}
            alt={record.title}
          />
        )
      },
    },
    {
      title: 'Name',
      render(_, record) {
        return <Link to={`/product/${record.id}`}>{record.title}</Link>
      },
    },
    {
      title: 'Category',
      dataIndex: 'category',
      render(category) {
        return <Tag color="cyan">{sentenceCase(category)}</Tag>
      },
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      render(quantity) {
        return numberFormat(quantity, '0,0')
      },
    },
    {
      title: 'Total Price',
      dataIndex: 'totalPrice',
      render(quantity) {
        return moneyFormat(quantity, {
          prefix: '$',
        })
      },
    },
    {
      key: 'action',
      render(_, record) {
        return (
          <FontAwesomeIcon
            icon={faTrash}
            cursor="pointer"
            color={token.colorError}
            onClick={() => deleteItem(record.id)}
          />
        )
      },
    },
  ]

  return (
    <Table
      rowKey="id"
      columns={columns}
      pagination={{
        hideOnSinglePage: true,
      }}
      scroll={{
        x: 720,
      }}
      rowSelection={{
        onChange: (keys) => selectItem(keys as number[]),
      }}
      dataSource={itemsInCart.map((item) => ({
        ...item.product,
        quantity: item.quantity,
        totalPrice: item.totalPrice,
      }))}
      {...props}
    />
  )
}

export default CartDisplayTable
