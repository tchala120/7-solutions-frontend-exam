import queryString, { type ParsedQuery } from 'query-string'
import { generatePath } from 'react-router-dom'

interface RouteToOptions {
  params?: Record<string, string | number>
  query?: ParsedQuery
}

export const routeTo = (originalPath: string, options?: RouteToOptions) => {
  const path = generatePath(originalPath, options?.params)

  return options?.query == null
    ? path
    : `${path}?${queryString.stringify(options.query)}`
}

export const delay = (time: number) => {
  return new Promise((resolve) => setTimeout(resolve, time))
}
