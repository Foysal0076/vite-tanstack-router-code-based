import { createRouter, RouterProvider } from '@tanstack/react-router'
import './App.css'
import { rootTree } from './routes'

const router = createRouter({ routeTree: rootTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

function App() {
  return <RouterProvider router={router} />
}

export default App
