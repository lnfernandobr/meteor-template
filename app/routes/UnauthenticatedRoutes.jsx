import React from "react";
import { RoutePaths } from "./RoutePaths";
import { Login } from "../login/Login";
import { Terms } from "../terms/Terms";
import { Route, Routes } from "react-router-dom";

export const UnauthenticatedRoutes = () => {
  return (
    <Routes>
      <Route path={`/${RoutePaths.TERMS}`} element={<Terms />} />
      <Route path="*" element={<Login />} />
    </Routes>
  );
};
