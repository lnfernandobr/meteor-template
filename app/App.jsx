import React from "react";
import { UnauthenticatedLayout } from "./layouts/UnauthenticatedLayout";
import { AuthenticatedLayout } from "./layouts/AuthenticatedLayout";
import { AuthenticatedRoutes } from "./routes/AuthenticatedRoutes";
import { UnauthenticatedRoutes } from "./routes/UnauthenticatedRoutes";

export const App = () => {
  // TODO I need to be improved with a provider
  const isLoggedUser = Meteor.userId();

  if (!isLoggedUser) {
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
