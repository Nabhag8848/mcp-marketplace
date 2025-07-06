import { ApolloClient, InMemoryCache } from '@apollo/client';

export const apolloClient = new ApolloClient({
  uri: `${process.env.SERVER_URL ?? 'http://localhost:3000'}/graphql`,
  cache: new InMemoryCache(),
});
