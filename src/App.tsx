import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ProductsPage } from './page/Products'

function App() {
  console.log('k paso')
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <ProductsPage></ProductsPage>
    </QueryClientProvider>
  )
}

export default App
