import React from "react";
import { RoutePaths } from "./RoutePaths";
import { Login } from "../login/Login";
import { Terms } from "../terms/Terms";
import { Route, Routes } from "react-router-dom";
import { ForgotPassword } from "../login/ForgotPassword";

export const UnauthenticatedRoutes = () => {
  return (
    <Routes>
      <Route path={`/${RoutePaths.TERMS}`} element={<Terms />} />
      <Route
        path={`/${RoutePaths.FORGOT_PASSWORD}`}
        element={<ForgotPassword />}
      />
      <Route path="*" element={<Login />} />
    </Routes>
  );
};
