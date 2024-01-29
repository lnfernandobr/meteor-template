import React from "react";
import { AppBar } from "../organisms/AppBar";
import { Box } from "@chakra-ui/react";

export const AuthenticatedLayout = ({ children }) => {
  return (
    <div className="h-screen w-full flex flex-col">
      <AppBar />

      <Box p={4}>{children}</Box>
    </div>
  );
};
