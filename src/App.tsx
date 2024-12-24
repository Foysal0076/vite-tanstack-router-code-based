import { createRouter, RouterProvider } from '@tanstack/react-router'
import './App.css'
import { rootTree } from './routes'
import { useAuth } from './hooks/use-auth'

const router = createRouter({
  routeTree: rootTree,
  context: { authentication: undefined! },
  defaultNotFoundComponent: () => <div>GLOBAL: 404 Not Found</div>,
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

function App() {
  const authentication = useAuth()

  return <RouterProvider router={router} context={{ authentication }} />
}

export default App
