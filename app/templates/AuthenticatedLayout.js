import React from "react";
import { AppBar } from "../molecules/AppBar";

export const AuthenticatedLayout = ({ children }) => {
  return (
    <div className="h-screen w-full flex flex-col">
      <AppBar />

      <main className="p-4 mt-4 flex-1">{children}</main>
    </div>
  );
};
