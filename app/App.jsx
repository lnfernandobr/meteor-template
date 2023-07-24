import React from "react";
import { UnauthenticatedLayout } from "./layouts/UnauthenticatedLayout";
import { AuthenticatedLayout } from "./layouts/AuthenticatedLayout";
import { AuthenticatedRoutes } from "./routes/AuthenticatedRoutes";
import { UnauthenticatedRoutes } from "./routes/UnauthenticatedRoutes";
import { useLoggedUser } from "./user/User";
import { useGetURLParam } from "./hooks/useGetURLParam";
import { useAuthentication } from "./hooks/useAuthentication";

const useTryAuthenticate = () => {
  const authToken = useGetURLParam("auth_token") || null;

  const { loggedUser } = useLoggedUser();
  const isLoggingIn = Meteor.loggingIn();
  const { loading } = useAuthentication(authToken);

  return {
    loggedUser,
    isLoggingIn,
    isLoading: (isLoggingIn && !loggedUser) || loading,
  };
};

export const App = () => {
  const { isLoggingIn, loggedUser, isLoading } = useTryAuthenticate();

  if (isLoading) {
    return "Checking your credentials...";
  }

  if (!loggedUser) {
    return (
      <UnauthenticatedLayout>
        <UnauthenticatedRoutes />
      </UnauthenticatedLayout>
    );
  }

  return (
    <AuthenticatedLayout>
      <AuthenticatedRoutes />
    </AuthenticatedLayout>
  );
};
