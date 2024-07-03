import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { RestLink } from 'apollo-link-rest';

const restLink = new RestLink({
  uri: 'https://newsapi.org/v2/',
  headers: {
    Authorization: '_API_KEY',
  },
});

export const client = new ApolloClient({
  link: restLink,
  cache: new InMemoryCache(),
});