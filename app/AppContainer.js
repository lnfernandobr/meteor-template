import React from "react";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import { LoggedUserProvider } from "./infra/user/LoggedUserProvider";
import { ChakraProvider } from "@chakra-ui/react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { DDPLink } from "@swydo/apollo-link-ddp";
import { LocaleProvider } from "./infra/i18n/LocaleProvider";

import "./infra/i18n/locales/pt_BR.i18n.json";
import "./infra/i18n/locales/en.i18n.json";

const client = new ApolloClient({
  link: new DDPLink(),
  cache: new InMemoryCache(),
});

export const AppContainer = () => (
  <BrowserRouter>
    <ChakraProvider>
      <ApolloProvider client={client}>
        <LoggedUserProvider>
          <LocaleProvider>
            <App />
          </LocaleProvider>
        </LoggedUserProvider>
      </ApolloProvider>
    </ChakraProvider>
  </BrowserRouter>
);
