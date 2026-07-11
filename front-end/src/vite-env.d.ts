/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_KEY_V3: string
  readonly VITE_API_KEY_V4: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
