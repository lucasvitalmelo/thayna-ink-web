export type envKeys = 'SERVER_API'

export type envType = {
  [key in envKeys]: string
}

export const env: envType = {
  SERVER_API: import.meta.env.VITE_API_SERVER,
}