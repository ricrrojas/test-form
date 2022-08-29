import { Flex } from '@/page/Products/styles'
import { useFilterBy } from '@/utils/useFilter'
import { useSortBy } from '@/utils/useSortBy'
import { GetProductResponse, Product } from '../../models'
import { Loader } from '../Loading'
import { OrderDirection, TableCell, TableHead, TableRoot, TableRow, Text, TextCenter, TH } from './styles'

export const ProductTable = ({
  isLoading,
  data,
  searchTerm,
}: {
  isLoading: boolean
  data: GetProductResponse | undefined
  searchTerm: string
}) => {
  if (isLoading || !data) {
    return <Loader role='progressbar' data-testid='loading-products' />
  }

  const [filtered] = useFilterBy(data?.products, searchTerm, ['code', 'description'])
  if (filtered.length === 0) {
    return <Text data-testid='no-products'>No data...</Text>
  }
  const [products, sortOpts, setSortKey, setSortDirection] = useSortBy(filtered, 'code', 'asc')

  const onSortBy = (column: keyof Product) => {
    if (column === sortOpts.sortKey) {
      setSortDirection(sortOpts.sortDirection === 'asc' ? 'desc' : 'asc')
    } else {
      setSortKey(column)
      setSortDirection('asc')
    }
  }

  return (
    <TableRoot role='table' data-testid='product-table'>
      <TableHead>
        <tr>
          <TH></TH>
          <TH>Image</TH>
          <TH onClick={() => onSortBy('code')} sortable>
            <Flex>
              <OrderDirection
                direction={sortOpts.sortDirection}
                column='code'
                sortKey={sortOpts.sortKey}
              />
              <TextCenter>Code</TextCenter>
            </Flex>
          </TH>
          <TH onClick={() => onSortBy('description')} sortable>
            <Flex>
              <OrderDirection
                direction={sortOpts.sortDirection}
                column='description'
                sortKey={sortOpts.sortKey}
              />
              <TextCenter>Description</TextCenter>
            </Flex>
          </TH>
          <TH onClick={() => onSortBy('quantity')} sortable>
            <Flex>
              <OrderDirection
                direction={sortOpts.sortDirection}
                column='quantity'
                sortKey={sortOpts.sortKey}
              />
              <TextCenter>Quantity</TextCenter>
            </Flex>
          </TH>
          <TH onClick={() => onSortBy('price')} sortable>
            <Flex>
              <OrderDirection
                direction={sortOpts.sortDirection}
                column='price'
                sortKey={sortOpts.sortKey}
              />
              <TextCenter>Price</TextCenter>
            </Flex>
          </TH>
        </tr>
      </TableHead>
      <tbody>
        {products.map((product) => (
          <TableRow key={product.code}>
            <TableCell>{product.position}</TableCell>
            <TableCell>
              <span>Image</span>
              <img src={`${window.location.origin}/images/${product.image}`} />
            </TableCell>
            <TableCell>
              <span>Code</span>
              {product.code}
            </TableCell>
            <TableCell>
              <span>Description</span>
              {product.description}
            </TableCell>
            <TableCell>
              <span>Quantity</span>
              {product.quantity}
            </TableCell>
            <TableCell>
              <span>Price</span>
              {product.price}
            </TableCell>
          </TableRow>
        ))}
      </tbody>
    </TableRoot>
  )
}
