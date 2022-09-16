import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ProductsPage } from './page/Products'

function App() {
  console.log('hola');
  console.log('k ase');
  console.log('k paso');
  console.log('k paso 2'); 

  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <ProductsPage></ProductsPage>
    </QueryClientProvider>
  )
}

export default App
