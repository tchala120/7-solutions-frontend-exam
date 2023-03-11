/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_VERSION: string
  readonly VITE_STORE_VERSION: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
