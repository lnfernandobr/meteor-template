import React from "react";
import { useNavigate } from "react-router-dom";
import { RoutePaths } from "../../infra/utils/RoutePaths";

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>This route was not found!</h1>
      <button onClick={() => navigate(RoutePaths.ROOT)}>Go home</button>
    </div>
  );
};
