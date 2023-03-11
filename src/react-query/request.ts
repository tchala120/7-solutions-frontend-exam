import Axios from 'axios'
import {
  QueryClient,
  type QueryFunctionContext,
  type QueryKey,
} from 'react-query'

import { token } from 'src/services/localStorage'

const instance = Axios.create()

instance.defaults.baseURL = 'https://dummyjson.com'

instance.interceptors.request.use(
  (config) => {
    const userToken = token.get()

    config.headers['Authorization'] =
      userToken != null ? `Bearer ${userToken}` : undefined

    return {
      ...config,
    }
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default instance

const defaultQueryHandler = ({
  queryKey,
}: QueryFunctionContext<QueryKey, any>) =>
  instance.get(queryKey[0] as string).then(({ data }) => data)

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: defaultQueryHandler,
    },
  },
})
