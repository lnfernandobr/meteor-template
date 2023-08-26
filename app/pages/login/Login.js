import React, { useEffect, useState } from 'react';
import {
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { useForm } from '../../infra/hooks/useForm';
import { useToast } from '../../infra/hooks/useToast';
import { GoogleButton } from '../../atoms/GoogleButton';
import { useLoggedUser } from '../../infra/user/LoggedUserProvider';
import { RoutePaths as RoutePath } from '../../infra/utils/RoutePaths';
import { loggerClient } from 'meteor/quave:logs/loggerClient';
import { Logo } from '../../atoms/Logo';
import { ExternalLinkIcon } from '@chakra-ui/icons';

export const Login = () => {
  const toast = useToast();
  const navigate = useNavigate();

  const initialState = {
    email: '',
  };

  const { refetchLoggedUser } = useLoggedUser();
  const { form, setForm } = useForm(initialState);
  const [urlSearchParams] = useSearchParams();
  const searchParams = Object.fromEntries(urlSearchParams);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (searchParams.email) {
      setForm({ ...form, email: searchParams.email });
    }
  }, []);

  const onLogin = (event) => {
    event.preventDefault();
    setIsLoading(true);
    Meteor.loginWithGoogle(
      {
        requestPermissions: ['https://www.googleapis.com/auth/youtube'],
      },
      (err) => {
        setIsLoading(false);

        if (!err) {
          refetchLoggedUser().then(() => {
            toast({ title: 'Bem vindo!' });
            navigate(RoutePath.ROOT);
          });
          return;
        }
        toast({
          title: 'Um erro inesperado aconteceu, tente novamente fazer o login.',
          status: 'error',
        });
        loggerClient.error({
          message: 'Error trying to sign in with google:',
          error: err,
        });
      }
    );
  };

  return (
    <Flex
      minH="100vh"
      align="center"
      padding={4}
      justify="center"
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack
        spacing={4}
        w="full"
        maxW="md"
        display="flex"
        justifyContent="center"
        alignItems="center"
        p={6}
        my={12}
      >
        <Logo />
        <Heading
          lineHeight={1.1}
          fontSize={{ base: 'xl', md: '2xl' }}
          sx={{ mb: 3 }}
        >
          Log in to your account
        </Heading>

        <GoogleButton onLogin={onLogin} isLoading={isLoading} />
        <Text fontSize="sm">
          To continue you agree with{' '}
          <Link to={`/${RoutePath.POLICIES}`} target="_blank">
            <span style={{ textDecoration: 'underline' }}>
              Terms and Policy <ExternalLinkIcon mx="2px" />
            </span>
          </Link>
        </Text>
      </Stack>
    </Flex>
  );
};
