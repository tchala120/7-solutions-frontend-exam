import { AxiosError } from 'axios'
import { useQuery, UseQueryOptions } from 'react-query'
import { Product, ReactQueryUseQueryHook } from './types'

interface ProductVariables {
  id: number
}

interface ProductQueryOptions extends UseQueryOptions<Product, AxiosError> {
  variables: ProductVariables
}

const useProductQuery = (options: ProductQueryOptions) => {
  const id = options.variables.id

  return useQuery<Product, AxiosError>(`/products/${id}`, {
    onError(error) {
      console.log('Error from get product query', error)
    },
    ...options,
  })
}

export default useProductQuery
