import { createRootRoute, createRoute } from '@tanstack/react-router'
import Root from './components/root'
import HomePage from './pages/home'
import DashboardPage from './pages/dashboard'
import AboutPage from './pages/about'
import PokemonsPage from './pages/pokemons'
import PokemonDetailsPage from './pages/pokemons/pokemon-details'
import { getPokemonDetails, getPokemonList } from './api/pokemon'
import SearchPage from './pages/search'

const rootRoute = createRootRoute({
  component: Root,
})

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
})

const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/dashboard',
  component: DashboardPage,
})

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: AboutPage,
})

const pokemonsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/pokemons',
  component: PokemonsPage,
  loader: async () => await getPokemonList(),
})

export const pokemonsDetailsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/pokemons/$pokemonId',
  component: PokemonDetailsPage,
  loader: async ({ params }) =>
    await getPokemonDetails(Number(params.pokemonId)),
})

import { z } from 'zod'

const ItemFiltersSchema = z.object({
  query: z.string(),
  hasDiscount: z.boolean(),
  categories: z.array(
    z.union([
      z.literal('electronics'),
      z.literal('clothing'),
      z.literal('furniture'),
    ])
  ),
})
export type ItemFilters = z.infer<typeof ItemFiltersSchema>

export const searchRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/search',
  validateSearch: (search: Record<string, unknown>): ItemFilters =>
    ItemFiltersSchema.parse(search),
  component: SearchPage,
})

export const rootTree = rootRoute.addChildren([
  homeRoute,
  dashboardRoute,
  aboutRoute,
  pokemonsRoute,
  pokemonsDetailsRoute,
  searchRoute,
])
