import React from "react";
import { logout } from "../login/logout";

export const AuthenticatedLayout = ({ children }) => {
  return (
    <div>
      <button onClick={logout}>logout</button>
      <h1 className="text-3xl font-bold underline">Menu</h1>

      <main>{children}</main>
    </div>
  );
};
