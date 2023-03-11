import { type QueryOptions, type UseQueryResult } from 'react-query'

export type ReactQueryUseQueryHook<T extends any, U = {}> = (
  options?: QueryOptions<T, U>
) => UseQueryResult<T, U>

export interface Product {
  id: number
  title: string
  description: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  brand: string
  category: string
  thumbnail: string
  images: string[]
}
