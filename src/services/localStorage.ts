import store from 'store'

type StorageKey = 'token' | 'version'

const storeKey = '7-solutions'

const storeVersion = import.meta.env.VITE_STORE_VERSION

const localName: Record<StorageKey, string> = {
  token: `${storeKey}:token`,
  version: `${storeKey}:version`,
}

export const token = {
  get: (): string | null => store.get(localName.token),
  set: (value: string) => store.set(localName.token, value),
}

export const version = {
  get: (): string | null => store.get(localName.version),
  set: (value: string) => store.set(localName.version, value),
}

export const clearAllStore = () => {
  store.clearAll()

  version.set(storeVersion)
}

const setupStorage = () => {
  const currentStoreVersion = version.get()

  if (currentStoreVersion !== storeVersion) {
    clearAllStore()
  }
}

export default setupStorage
