import { useRouter } from '@tanstack/react-router'
import { useAuth } from '../hooks/use-auth'

export default function LoginPage() {
  const { login } = useAuth()
  const router = useRouter()

  const onLoginButtonClick = () => {
    login()
    router.navigate({ to: '/dashboard' })
  }
  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={onLoginButtonClick}>Login</button>
    </div>
  )
}
