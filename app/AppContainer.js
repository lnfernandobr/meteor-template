import React from 'react';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';
import { LoggedUserProvider } from './infra/providers/user/LoggedUserProvider';
import { ChakraProvider } from '@chakra-ui/react';
import { ApolloProvider } from '@apollo/client';
import ApolloClient from 'apollo-boost';
import { Accounts } from 'meteor/accounts-base';

const client = new ApolloClient({
  uri: '/graphql',
  request: (operation) =>
    operation.setContext(() => ({
      headers: {
        authorization: Accounts._storedLoginToken(),
      },
    })),
});

export const AppContainer = () => (
    <BrowserRouter>
      <LoggedUserProvider>
        <ChakraProvider>
          <ApolloProvider client={client}>
            <App />
          </ApolloProvider>
        </ChakraProvider>
      </LoggedUserProvider>
    </BrowserRouter>
  );
