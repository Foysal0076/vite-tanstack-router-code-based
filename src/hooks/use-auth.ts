export const useAuth = () => {
  const login = () => {
    localStorage.setItem('token', 'authorized')
  }
  const logout = () => {
    localStorage.removeItem('token')
  }

  const isAuthenticated = () => !!localStorage.getItem('token')

  return { login, logout, isAuthenticated }
}

export type AuthContextType = ReturnType<typeof useAuth>
