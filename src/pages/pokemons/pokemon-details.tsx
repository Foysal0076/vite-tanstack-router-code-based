import { getRouteApi } from '@tanstack/react-router'
// import { pokemonsDetailsRoute } from '../../routes'

const routeApi = getRouteApi('/pokemons/$pokemonId')

export default function PokemonDetailsPage() {
  const { pokemonId } = routeApi.useParams()
  const pokemon = routeApi.useLoaderData()

  return (
    <div>
      Hello /pokemon/{pokemonId}
      <h2>{pokemon.name}</h2>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <dl>
        <dt>Height</dt>
        <dd>{pokemon.height}</dd>
        <dt>Weight</dt>
        <dd>{pokemon.weight}</dd>
        <dt>Types</dt>
        <dd>{pokemon.types.join(', ')}</dd>
      </dl>
    </div>
  )
}
