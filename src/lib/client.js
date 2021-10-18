import { createClient } from 'microcms-js-sdk'

export const client = createClient({
  serviceDomain: 'bizen',
  apiKey: process.env.API_KEY,
})
