import { ApolloProvider } from '@apollo/client';
import { ReactNode } from 'react';
import { apolloClient } from './apollo-client';

interface GraphQLProviderProps {
  children: ReactNode;
}

export function ApolloGraphQLProvider({ children }: GraphQLProviderProps) {
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
}
