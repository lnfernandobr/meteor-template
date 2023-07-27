import { useToast as useToastHook } from "@chakra-ui/react";
export const useToast = () => {
  const toast = useToastHook();

  return ({
    title,
    description,
    status = "success",
    duration = 9000,
    isClosable = true,
    ...rest
  }) => toast({ title, description, status, duration, isClosable, ...rest });
};
