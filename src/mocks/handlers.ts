import { rest } from 'msw'
import products from './data/products.json'

export const handlers = [
  rest.get('/products', (req, res, ctx) => {
    return res(ctx.delay(1000), ctx.status(200), ctx.json(products))
  }),
]
