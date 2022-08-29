export interface Product {
  code: string
  description: string
  image: string
  position: number
  price: number
  quantity: number
}

export interface GetProductResponse {
  products: Array<Product>
}
