import React from "react";
import { Route, Routes } from "react-router-dom";
import { RoutePaths } from "../../utils/RoutePaths";
import { Home } from "../../../pages/home/Home";
import { Terms } from "../../../pages/terms/Terms";
import { NotFound } from "../../../pages/notFound/NotFound";
import { Profile } from "../../../pages/profile/Profile";

export const AuthenticatedRoutes = () => {
  return (
    <Routes>
      <Route path={RoutePaths.ROOT} element={<Home />} />
      <Route path={`/${RoutePaths.TERMS}`} element={<Terms />} />
      <Route path={`/${RoutePaths.PROFILE}`} element={<Profile />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
