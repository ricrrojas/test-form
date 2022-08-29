import React from 'react'
import { render, screen } from '@testing-library/react'
import { ProductTable } from './index'
import products from '../../mocks/data/products.json'
import { GetProductResponse } from '@/models'

test('renders product table empty', () => {
  render(<ProductTable data={{ products: [] }} isLoading={false} searchTerm='' />)
  const noProductsText = screen.getByTestId('no-products')
  expect(noProductsText).not.toBeNull()
})

test('renders product table loading', () => {
  render(<ProductTable data={{ products: [] }} isLoading={true} searchTerm='' />)
  const noProductsText = screen.getByTestId('loading-products')
  expect(noProductsText).not.toBeNull()
})

test('renders product table with products', () => {
  const data = { products: products.products } as unknown as GetProductResponse
  render(<ProductTable data={data} isLoading={false} searchTerm='' />)
  const noProductsText = screen.getByTestId('product-table')
  expect(noProductsText).not.toBeNull()
})
