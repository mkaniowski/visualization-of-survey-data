import './index.css'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import Home from '@/views/home/Home.tsx'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  )
}

export default App
