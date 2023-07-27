import React, { useEffect, useState } from "react";
import {
  Button,
  FormControl,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
  useColorModeValue,
  Box,
  Link,
} from "@chakra-ui/react";

import { useNavigate, useSearchParams } from "react-router-dom";
import { Meteor } from "meteor/meteor";
import { Accounts } from "meteor/accounts-base";
import { RoutePaths } from "../../infra/utils/RoutePaths";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { useForm } from "../../infra/hooks/useForm";
import { useToast } from "../../infra/hooks/useToast";

export const Login = ({}) => {
  const toast = useToast();

  const initialState = {
    email: "",
  };

  const { form, setForm, onChange } = useForm(initialState);

  const [urlSearchParams] = useSearchParams();
  const searchParams = Object.fromEntries(urlSearchParams);
  const [isRequestedToken, setIsRequestedToken] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (searchParams.email) {
      setForm({ ...form, email: searchParams.email });
    }
  }, []);

  const requestToken = () => {
    if (!form.email) {
      toast({
        title: "Wrong informations",
        status: "error",
        description: `Email is required`,
      });
      return;
    }

    const formattedEmail = form.email.toLocaleString().trim();
    Accounts.requestLoginTokenForUser(
      {
        selector: { email: formattedEmail },
        userData: { email: formattedEmail },
      },
      (error) => {
        if (error) {
          toast({
            title: "Login error",
            status: "error",
            description: "Error requesting access code",
          });
          setForm({ ...form, token: "" });
          return;
        }
        setForm({ ...form, token: "" });

        toast({
          title: "Login",
          status: "info",
          description: `The code was sent to: ${form.email}`,
        });
        setIsRequestedToken(true);
      },
    );
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (!isRequestedToken) {
      return;
    }
    setIsLoading(true);

    Meteor.passwordlessLoginWithToken(
      { email: form.email },
      form.token,
      (error) => {
        try {
          if (error) {
            toast({
              title: "Incorrect code",
              status: "error",
              description: `You provided an incorrect code - Please check the code again`,
            });
            setForm({ ...form, token: "" });
            return;
          }
          toast({
            title: "Welcome",
            description: `Nice to see you!`,
          });
          navigate(`/${RoutePaths.ROOT}`);
        } catch (e) {
        } finally {
          setIsLoading(false);
        }
      },
    );

    setIsLoading(false);
  };

  const buttonProps = {
    bg: "blue.400",
    color: "white",
    _hover: {
      bg: "blue.500",
    },
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
            Meteor Template
          </Heading>
          {isRequestedToken ? (
              <Box>
                <Text>
                  An access code has been sent to {form.email}, check your email
                  (spam box too), copy the code and paste it below to enter the
                  platform!
                </Text>

                <Text
                    sx={{ mt: 2, textDecoration: "underline", cursor: "pointer" }}
                    color="blue.500"
                    onClick={requestToken}
                    type="button"
                >
                  Request code again
                </Text>
              </Box>
          ) : (
              <Text>We will send the code to your email</Text>
          )}
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

            {isRequestedToken && (
              <Input
                sx={{ mt: 2 }}
                placeholder="Code"
                _placeholder={{ color: "gray.500" }}
                onChange={onChange}
                required
                name="token"
                value={form.token}
                type="token"
              />
            )}
          </FormControl>

          <Stack spacing={6}>
            {isRequestedToken ? (
              <Button {...buttonProps} type="submit">
                {isLoading ? "Loading..." : "Enter"}
              </Button>
            ) : (
              <Button {...buttonProps} type="button" onClick={requestToken}>
                Request code
              </Button>
            )}
          </Stack>

          <Box display="flex" justify="center" sx={{ textAlign: "center" }}>
            <Text>
              <Link href={RoutePaths.TERMS} isExternal color="teal.500">
                Terms of Service and Privacy <ExternalLinkIcon mx="2px" />
              </Link>{" "}
              By logging in you agree to all terms
            </Text>
          </Box>
        </Stack>
      </Flex>
    </form>
  );
};
