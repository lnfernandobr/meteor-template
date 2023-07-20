import React from "react";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import { LoggedUserProvider } from "./user/User";

export const AppContainer = () => {
  return (
    <BrowserRouter>
      <LoggedUserProvider>
        <App />
      </LoggedUserProvider>
    </BrowserRouter>
  );
};
