import React from "react";
import { useTryAuthenticate } from "./infra/hooks/useTryAuthenticate";
import { UnauthenticatedLayout } from "./templates/UnauthenticatedLayout";
import { UnauthenticatedRoutes } from "./infra/providers/route/UnauthenticatedRoutes";
import { AuthenticatedLayout } from "./templates/AuthenticatedLayout";
import { AuthenticatedRoutes } from "./infra/providers/route/AuthenticatedRoutes";

export const App = () => {
  const { loggedUser, isLoading } = useTryAuthenticate();

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
