import React from "react";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import { LoggedUserProvider } from "./infra/providers/user/LoggedUserProvider";
import { ChakraProvider } from "@chakra-ui/react";

export const AppContainer = () => {
  return (
    <BrowserRouter>
      <LoggedUserProvider>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </LoggedUserProvider>
    </BrowserRouter>
  );
};
