import React from "react";
import { RoutePaths } from "./RoutePaths";
import { Home } from "../home/Home";
import { Route, Routes } from "react-router-dom";
import { NotFound } from "../components/notFound";
import { Terms } from "../terms/Terms";

export const AuthenticatedRoutes = () => {
  return (
    <Routes>
      <Route path={RoutePaths.ROOT} element={<Home />} />
      <Route path={`/${RoutePaths.TERMS}`} element={<Terms />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
