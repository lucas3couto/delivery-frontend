import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

const url = 'http://localhost:1337/graphql'

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: url
})

const client = new ApolloClient({
  cache,
  link
})

export default client
