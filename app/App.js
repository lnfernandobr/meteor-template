import React from 'react';
import { AuthenticatedRoutes } from './pages/AuthenticatedRoutes';
import { useLoggedUser } from './infra/user/LoggedUserProvider';
import { loadDevMessages, loadErrorMessages } from '@apollo/client/dev';
import { Environments } from './infra/utils/Environments';
import { UnauthenticatedRoutes } from './pages/UnauthenticatedRoutes';

if (Environments.isDevelopment) {
  loadDevMessages();
  loadErrorMessages();
}

export const App = () => {
  const { loggedUser, loading: isLoading } = useLoggedUser();

  if (isLoading) {
    return 'Checking your credentials...';
  }

  if (!loggedUser) {
    return <UnauthenticatedRoutes />;
  }

  return <AuthenticatedRoutes />;
};
