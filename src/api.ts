import { GetProductResponse } from './models'

async function api<T>(url: string): Promise<T> {
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(response.statusText)
  }
  return await (response.json() as Promise<T>)
}

export const fetchProducts = () => {
  return api<GetProductResponse>('/products')
}
