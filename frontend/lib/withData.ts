import { ApolloClient, ApolloLink, InMemoryCache, NormalizedCacheObject } from '@apollo/client'
import { onError } from '@apollo/link-error'
import { getDataFromTree } from '@apollo/client/react/ssr'
import { createUploadLink } from 'apollo-upload-client'
import withApollo from 'next-with-apollo'
import { endpoint, prodEndpoint } from '../config'

function createClient({ headers, initialState }: any): ApolloClient<NormalizedCacheObject> {
  const cache = new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          // TODO: We will add this together!
          // allProducts: paginationField(),
        },
      },
    },
  }).restore(initialState || {})

  const link = ApolloLink.from([
    // returns either a GraphQL error or a network error
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors)
        graphQLErrors.forEach(({ message, locations, path }) =>
          console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`),
        )
      if (networkError) console.log(`[Network error]: ${networkError}. Backend is unreachable. Is it running?`)
    }),
    // this uses apollo-link-http under the hood, so all the options here come from that package
    createUploadLink({
      uri: process.env.NODE_ENV === 'development' ? endpoint : prodEndpoint,
      fetchOptions: {
        credentials: 'include',
      },
      // pass the headers along from this request. This enables SSR with logged in state
      headers,
    }),
  ])

  return new ApolloClient({
    link,
    cache,
    name: 'ecomm',
    version: '1.0'
  })
}

export default withApollo(createClient, { getDataFromTree })
