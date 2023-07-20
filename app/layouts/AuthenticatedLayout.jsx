import React from "react";

export const AuthenticatedLayout = ({ children }) => {
  return (
    <div>
      <h1>Menu</h1>

      <main>{children}</main>
    </div>
  );
};
