import { DarkModeIcon } from '@/components/DarkModeIcon'
import { ProductTable } from '@/components/ProductTable'
import { SearchInput } from '@/components/SearchInput'
import { darkTheme } from '@/theme/stitches.config'
import { useQuery } from '@tanstack/react-query'
import { useCallback, useState } from 'react'
import { fetchProducts } from '../../api'
import { GetProductResponse } from '../../models'
import { Button, Container, Flex, Heading, Page } from './styles'

export const ProductsPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const { isLoading, data } = useQuery<GetProductResponse>(['products'], fetchProducts)

  const [darkMode, setDarkMode] = useState(false)

  const onSearchInput = useCallback(
    (value: string) => {
      setSearchTerm(value)
    },
    [searchTerm],
  )

  return (
    <Page className={darkMode ? darkTheme : ''}>
      <Container>
        <Flex>
          <Heading style={{ flex: 1 }}>Products</Heading>
          <div>
            <Button style={{ margin: 'auto' }} onClick={() => setDarkMode(!darkMode)}>
              <DarkModeIcon />
            </Button>
          </div>
        </Flex>
        <SearchInput onSearchInput={onSearchInput}></SearchInput>
        <ProductTable isLoading={isLoading} data={data} searchTerm={searchTerm}></ProductTable>
      </Container>
    </Page>
  )
}
