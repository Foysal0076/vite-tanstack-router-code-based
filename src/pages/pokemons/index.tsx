import { getRouteApi, Link } from '@tanstack/react-router'

const routeApi = getRouteApi('/pokemons')

export default function PokemonsPage() {
  const pokemons = routeApi.useLoaderData()
  console.log(pokemons)
  return (
    <div>
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.id}>
            <Link to={`/pokemons/${pokemon.id}`}>{pokemon.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
