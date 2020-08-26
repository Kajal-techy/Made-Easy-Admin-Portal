import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'


const link = new HttpLink({ uri: 'http://localhost:9095/graphql' })
const cache = new InMemoryCache()
const client = new ApolloClient({
    link,
    cache
})
export default client;