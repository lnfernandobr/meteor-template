import React from "react";
import { Box, Center, Spinner, Text } from "@chakra-ui/react";

export const Loading = ({ message = "Checking your credentials..." }) => {
  return (
    <Center height="100vh">
      <Box display="flex" flexDirection="column" color="gray.500" alignItems="center">
        <Spinner thickness="4px" speed="0.65s" size="xl" />

        <Text fontSize="sm" mt={3} color="gray.500">{message}</Text>
      </Box>
    </Center>
  );
};
