type PokemonDetails = {
  id: number
  name: string
  height: number
  weight: number
  types: string[]
  sprites: {
    front_default: string
  }
}

export async function getPokemonDetails(id: number): Promise<PokemonDetails> {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  const data = await response.json()
  return {
    id: data.id,
    name: data.name,
    height: data.height,
    weight: data.weight,
    types: data.types.map((type: any) => type.type.name),
    sprites: data.sprites,
  }
}

export async function getPokemonList(): Promise<PokemonDetails[]> {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon`)
  const data = await response.json()
  return Promise.all(
    data.results.map(async (pokemon: any) => {
      const response = await fetch(pokemon.url)
      const data = await response.json()
      return {
        id: data.id,
        name: data.name,
        height: data.height,
        weight: data.weight,
        types: data.types.map((type: any) => type.type.name),
        sprites: data.sprites,
      }
    })
  )
}
