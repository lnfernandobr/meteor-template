import React from "react";
import { logout } from "../login/logout";
import { AppBar } from "../components/AppBar";

export const AuthenticatedLayout = ({ children }) => {
  return (
    <div>
      <AppBar />

      <main className="p-4 mt-4">{children}</main>
    </div>
  );
};
