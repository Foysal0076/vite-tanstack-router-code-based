import { Link, Outlet } from '@tanstack/react-router'

export default function Root() {
  return (
    <div>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/dashboard'>Dashboard</Link>
      <Link to='/pokemons'>Pokemons</Link>
      <Link to='/pokemons/$pokemonId' params={{ pokemonId: '1' }}>
        <Link
          to='/search'
          search={{
            query: 'shoes',
            categories: ['electronics', 'clothing'],
            hasDiscount: false,
          }}>
          Search
        </Link>
        Pokemon 1
      </Link>
      <Link to='/login'>Login</Link>
      <Outlet />
    </div>
  )
}
