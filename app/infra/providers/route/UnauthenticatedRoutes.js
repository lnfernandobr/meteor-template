import React from "react";
import { Route, Routes } from "react-router-dom";
import { Terms } from "../../../pages/terms/Terms";
import { RoutePaths } from "../../utils/RoutePaths";
import { Login } from "../../../pages/login/Login";

export const UnauthenticatedRoutes = () => {
  return (
    <Routes>
      <Route path={`/${RoutePaths.TERMS}`} element={<Terms />} />
      <Route path="*" element={<Login />} />
    </Routes>
  );
};
