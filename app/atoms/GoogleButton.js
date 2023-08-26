import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Button, Center, Text } from '@chakra-ui/react';

export const GoogleButton = ({
  onLogin,
  isLoading = false,
  label = 'Continue with Google',
}) => (
    <Button
      w="full"
      maxW="md"
      variant="outline"
      leftIcon={<FcGoogle />}
      onClick={onLogin}
    >
      <Center>
        <Text>{isLoading ? 'Signing...' : label}</Text>
      </Center>
    </Button>
  );
