import { getRouteApi, useNavigate } from '@tanstack/react-router'
import { ItemFilters } from '../routes'

const Route = getRouteApi('/search')

export default function SearchPage() {
  const { categories, hasDiscount, query } = Route.useSearch()
  const navigate = useNavigate({ from: Route.id })

  const updateFilters = (name: keyof ItemFilters, value: unknown) => {
    navigate({ search: (prev) => ({ ...prev, [name]: value }) })
  }

  return (
    <div>
      <h1>Search</h1>
      You searched for:{' '}
      <input
        type='text'
        value={query}
        onChange={(e) => {
          updateFilters('query', e.target.value)
        }}
      />
      <br />
      <input
        id='hasDiscount'
        type='checkbox'
        checked={hasDiscount}
        onChange={(e) => {
          updateFilters('hasDiscount', e.target.checked)
        }}
      />
      <label htmlFor='hasDiscount'>Has Discount</label>
      <br />
      <select
        value={categories}
        onChange={(e) => {
          const selected = Array.from(e.target.selectedOptions).map(
            (option) => option.value
          )
          updateFilters('categories', selected)
        }}
        multiple>
        <option value='electronics'>Electronics</option>
        <option value='clothing'>Clothing</option>
        <option value='furniture'>Furniture</option>
      </select>
      <br />
      <br />
      <pre>{JSON.stringify({ categories, hasDiscount, query }, null, 2)}</pre>
    </div>
  )
}
