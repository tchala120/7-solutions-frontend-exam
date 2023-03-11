import { AxiosError } from 'axios'

import { useQuery, type UseQueryResult } from 'react-query'

import { Product, ReactQueryUseQueryHook } from 'src/react-query/types'

interface ListProductsResponse {
  products: Product[]
}

const useListProducts: ReactQueryUseQueryHook<
  ListProductsResponse,
  AxiosError
> = (options) =>
  useQuery<ListProductsResponse, AxiosError>('/products?limit=100', {
    onError(error) {
      console.log('Error from list products query', error)
    },
    ...(options ?? {}),
  })

export default useListProducts