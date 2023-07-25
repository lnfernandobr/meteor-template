import React from "react";
import { Link } from "react-router-dom";
import { RoutePaths } from "../infra/utils/RoutePaths";
import { logout } from "../infra/utils/logout";

export const AppBar = () => {
  return (
    <nav className="bg-white flex justify-between p-4">
      <h1 className="underline text-xl">Logo</h1>
      <ul className="flex">
        <li className="mr-6">
          <Link
            className="text-blue-500 hover:text-blue-800"
            to={RoutePaths.ROOT}
          >
            Home
          </Link>
        </li>
        <li className="mr-6">
          <button
            className="text-blue-500 hover:text-blue-800"
            onClick={logout}
          >
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
};
