import React from "react";
import { logout } from "../login/logout";
import { AppBar } from "../components/AppBar";

export const AuthenticatedLayout = ({ children }) => {
  return (
    <div className="h-screen w-full flex flex-col h-screen">
      <AppBar />

      <main className="p-4 mt-4 flex-1">{children}</main>
    </div>
  );
};
