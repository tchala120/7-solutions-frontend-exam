export type RouteKey = 'home' | 'productDetail' | 'cart' | 'paymentSuccess'

export const paths: Record<RouteKey, string> = {
  home: '/',
  productDetail: '/product/:id',
  cart: '/cart',
  paymentSuccess: '/payment-success',
}
