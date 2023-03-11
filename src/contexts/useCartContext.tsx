import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

import type { Product } from 'src/react-query/types'

interface ItemInCart {
  product: Product
  quantity: number
  totalPrice: number
}

interface CartContextData {
  itemsInCart: ItemInCart[]
  totalItemsInCart: number
  summaryPrice: number
  addNewItem: (newItem: Product) => void
  removeItemQuantity: (id: number) => void
  selectItem: (id: number[]) => void
  deleteItem: (id: number) => void
}

interface CartProviderProps {
  children: ReactNode
}

const CartContext = createContext<any>(null)

export const CartProvider = ({ children }: CartProviderProps) => {
  const [itemsInCart, setItemsInCart] = useState<ItemInCart[]>([])
  const [itemIDs, setItemIDs] = useState<number[]>([])

  const addNewItem = (newItem: Product) => {
    const foundData = itemsInCart.find((item) => item.product.id === newItem.id)

    const newItemAddToCart: ItemInCart = {
      product: newItem,
      quantity: 1,
      totalPrice: newItem.price,
    }

    const updatedItems = itemsInCart.map((item) => {
      if (item.product.id === newItem.id) {
        const quantity = item.quantity + 1
        const totalPrice = item.product.price * quantity

        return {
          ...item,
          quantity,
          totalPrice,
        }
      }

      return item
    })

    if (foundData == null) {
      updatedItems.push(newItemAddToCart)
    }

    setItemsInCart(updatedItems)
  }

  const removeItemQuantity = (id: number) => {
    const updatedItems = itemsInCart.map((item) => {
      if (item.product.id === id) {
        const quantity = item.quantity === 0 ? item.quantity : item.quantity - 1
        const totalPrice = item.product.price * quantity

        return {
          ...item,
          quantity,
          totalPrice,
        }
      }

      return item
    })

    setItemsInCart(updatedItems.filter((item) => item.quantity > 0))
  }

  const selectItem = (ids: number[]) => {
    setItemIDs(ids)
  }

  const deleteItem = (id: number) => {
    const updatedItems = itemsInCart.filter((item) => item.product.id !== id)

    setItemsInCart(updatedItems)
  }

  const summaryPrice = useMemo(() => {
    const selectItemsOnly = itemsInCart.filter((item) =>
      itemIDs.includes(item.product.id)
    )

    return selectItemsOnly.reduce(
      (prev, current) => prev + current.totalPrice,
      0
    )
  }, [itemsInCart, itemIDs])

  const value: CartContextData = {
    itemsInCart,
    totalItemsInCart: itemsInCart.length,
    summaryPrice,
    addNewItem,
    removeItemQuantity,
    selectItem,
    deleteItem,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

const useCartContext = () => useContext<CartContextData>(CartContext)

export default useCartContext
