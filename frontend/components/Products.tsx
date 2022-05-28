import { useQuery, gql } from '@apollo/client'
import styled from 'styled-components'
import { perPage } from '../config'
import { Product } from '../models/product'
import ProductItem from './product'

export const ALL_PRODUCTS_QUERY = gql`
  query ALL_PRODUCTS_QUERY {
    products {
      id
      name
      price
      description
      photo {
        id
        image {
          publicUrlTransformed
        }
      }
    }
  }
`

const ProductsListStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
`

export default function Products({ page }: any) {
  const { data, error, loading } = useQuery(ALL_PRODUCTS_QUERY, {
    variables: {
      skip: page * perPage - perPage,
      first: perPage,
    },
  })
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>
  return (
    <div>
      <ProductsListStyles>
        {data.products.map((product: Product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ProductsListStyles>
    </div>
  )
}