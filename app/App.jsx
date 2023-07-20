import React from "react";
import { UnauthenticatedLayout } from "./layouts/UnauthenticatedLayout";
import { AuthenticatedLayout } from "./layouts/AuthenticatedLayout";
import { AuthenticatedRoutes } from "./routes/AuthenticatedRoutes";
import { UnauthenticatedRoutes } from "./routes/UnauthenticatedRoutes";
import { useLoggedUser } from "./user/User";

export const App = () => {
  const { loggedUser } = useLoggedUser();
  const isLoggingIn = Meteor.loggingIn();

  if (isLoggingIn && !loggedUser) {
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
