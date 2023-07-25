import React from "react";
import { Route, Routes } from "react-router-dom";
import { RoutePaths } from "../../utils/RoutePaths";
import { Home } from "../../../pages/home/Home";
import { Terms } from "../../../pages/terms/Terms";
import { ResetPassword } from "../../../pages/login/ResetPassword";
import { NotFound } from "../../../pages/notFound/NotFound";

export const AuthenticatedRoutes = () => {
  return (
    <Routes>
      <Route path={RoutePaths.ROOT} element={<Home />} />
      <Route path={`/${RoutePaths.TERMS}`} element={<Terms />} />
      <Route
        path={`/${RoutePaths.RESET_PASSWORD}`}
        element={<ResetPassword />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
