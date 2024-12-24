import { useRouter } from '@tanstack/react-router'
import { useAuth } from '../hooks/use-auth'

export default function DashboardPage() {
  const { logout } = useAuth()
  const router = useRouter()
  const onLogoutButtonClick = () => {
    logout()
    router.navigate({ to: '/login' })
  }

  return (
    <div>
      <h1>Dashboard Page</h1>
      <button onClick={onLogoutButtonClick}>Logout</button>
    </div>
  )
}
