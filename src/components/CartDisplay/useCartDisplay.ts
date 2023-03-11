import { useState } from 'react'
import { useEffectOnce } from 'react-use'
import PubSub from 'pubsub-js'

import type { CartDisplayProps } from './CartDisplay'

const MESSAGE = 'UseCartDisplay'

const useCartDisplay = () => {
  const open = (visible: boolean, props?: Omit<CartDisplayProps, 'open'>) => {
    PubSub.publish(MESSAGE, {
      open: visible,
      ...props,
    })
  }

  return {
    open,
  }
}

export default useCartDisplay

export const useCartDisplaySubscribe = () => {
  const [props, setProps] = useState<CartDisplayProps>({
    open: false,
  })

  useEffectOnce(() => {
    const token = PubSub.subscribe(
      MESSAGE,
      (message, newProps: CartDisplayProps) => {
        if (message === MESSAGE) {
          setProps(newProps)
        }
      }
    )

    return () => {
      PubSub.unsubscribe(token)
    }
  })

  return props
}
