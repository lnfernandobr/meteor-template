import React from 'react';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';
import { LoggedUserProvider } from './infra/user/LoggedUserProvider';
import { ChakraProvider } from '@chakra-ui/react';
import { Accounts } from 'meteor/accounts-base';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
  headers: {
    authorization: Accounts._storedLoginToken(),
  },
  request: (operation) =>
    operation.setContext(() => ({
      headers: {
        authorization: Accounts._storedLoginToken(),
      },
    })),
});

export const AppContainer = () => (
  <BrowserRouter>
    <ChakraProvider>
      <ApolloProvider client={client}>
        <LoggedUserProvider>
          <App />
        </LoggedUserProvider>
      </ApolloProvider>
    </ChakraProvider>
  </BrowserRouter>
);
