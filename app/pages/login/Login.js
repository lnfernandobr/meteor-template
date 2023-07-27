import React from "react";
import { useForm } from "../../infra/hooks/useForm";

import {
  Button,
  FormControl,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export const Login = () => {
  const initialState = {
    email: "",
  };

  const { form, onChange, setForm } = useForm(initialState);

  const onSubmit = (event) => {
    event.preventDefault();

    // TODO handle it here
    console.log(form);
    setForm(initialState);
  };

  return (
    <form onSubmit={onSubmit}>
      <Flex
        minH="100vh"
        align="center"
        justify="center"
        component="form"
        onSubmit={onSubmit}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack
          spacing={4}
          w={"full"}
          maxW={"md"}
          bg={useColorModeValue("white", "gray.700")}
          rounded={"xl"}
          boxShadow={"lg"}
          p={6}
          my={12}
        >
          <Heading lineHeight={1.1} fontSize={{ base: "2xl", md: "3xl" }}>
            Login with only email
          </Heading>
          <Text
            fontSize={{ base: "sm", sm: "md" }}
            color={useColorModeValue("gray.800", "gray.400")}
          >
            We&apos;ll send a code to your email to you log-in
          </Text>
          <FormControl id="email" onSubmit={onSubmit}>
            <Input
              placeholder="your-email@example.com"
              _placeholder={{ color: "gray.500" }}
              onChange={onChange}
              required
              name="email"
              value={form.email}
              type="email"
            />
          </FormControl>
          <Stack spacing={6}>
            <Button
              bg="blue.400"
              color="white"
              type="submit"
              _hover={{
                bg: "blue.500",
              }}
            >
              Request code
            </Button>
          </Stack>
        </Stack>
      </Flex>
    </form>
  );
};
