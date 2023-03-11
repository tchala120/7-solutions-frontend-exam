import type { AxiosError } from 'axios'

import queryString from 'query-string'
import {
  useQuery,
  type UseQueryResult,
  type UseQueryOptions,
} from 'react-query'

import { pagination } from './request'

import type { Product } from 'src/react-query/types'

interface ListProductsVariables {
  search?: string
  limit?: number
  skip?: number
}

interface ListProductsQueryOptions
  extends UseQueryOptions<ListProductsResponse, AxiosError> {
  variables?: ListProductsVariables
}

interface ListProductsResponse {
  limit: number
  total: number
  skip: number
  products: Product[]
}

const useListProducts = (
  options?: ListProductsQueryOptions
): UseQueryResult<ListProductsResponse, AxiosError> => {
  const search = options?.variables?.search
  const limit = options?.variables?.limit
  const skip = options?.variables?.skip

  const listItemQueryString = queryString.stringify({
    limit: limit || pagination.limit,
    skip,
  })

  const listItemSearchQueryString = queryString.stringify({
    q: search,
  })

  const path =
    search == null || search === ''
      ? `/products?${listItemQueryString}`
      : `/products/search?${listItemSearchQueryString}`

  return useQuery<ListProductsResponse, AxiosError>(path, {
    onError(error) {
      console.log('Error from list products query', error)
    },
    ...(options ?? {}),
  })
}

export default useListProducts
