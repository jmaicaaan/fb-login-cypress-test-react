import React, { useState } from 'react';

import { useNavigate } from 'react-router';

import { Button } from '@chakra-ui/button';
import { Box, Container, Divider, Flex } from '@chakra-ui/layout';
import { FormControl, FormHelperText, FormLabel } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { Spinner } from '@chakra-ui/spinner';
import { useToast } from '@chakra-ui/react';

import { FaFacebook } from 'react-icons/fa';

export const Login = () => {
  const navigate = useNavigate();
  const toast = useToast();

  // Note: This should be done through the form state (ie Formik state)
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleOnSubmit = () => {
    setIsSubmitting(true);
    navigate('/home');
  };

  const handleFbLogin = async () => {
    setIsSubmitting(true);
    const FB = (window as any).FB;

    FB.login((response: any) => {
      if (response.authResponse) {
        console.log('Welcome!  Fetching your information.... ');
        navigate('/home');
      } else {
        toast({
          id: 'toast',
          title: 'Login failed',
          description: 'Sorry, an unexpected error occurred. Please try logging in again',
          status: 'error',
          duration: 9000,
          isClosable: true,
        })
        console.log('User cancelled login or did not fully authorize.');
      }
      setIsSubmitting(false);
    });
  };

  return (
    <Container>
      <Box
        sx={{
          border: '1px solid #DEDEDE',
          borderRadius: '16px',
          p: '16px',
          my: '72px',
        }}
      >
        <form
          onSubmit={handleOnSubmit}
        >
          <FormControl id='email'>
            <FormLabel>Email address</FormLabel>
            <Input
              type='email'
              data-testid='field-email'
            />
            <FormHelperText>We'll never share your email.</FormHelperText>
          </FormControl>
          <FormControl id='password'>
            <FormLabel>Password</FormLabel>
            <Input
              type='password'
              data-testid='field-password'
            />
          </FormControl>
          <Flex
            flexDirection='column'
          >
            <Button
              type='submit'
              disabled={isSubmitting}
              data-testid='login-button'
              sx={{
                my: '24px',
              }}
            >
              Submit
            </Button>
          </Flex>
        </form>
        <Divider />
        <Flex
          flexDirection='column'
          sx={{
            my: '16px'
          }}
        >
          <Button
            colorScheme='facebook'
            leftIcon={<FaFacebook />}
            onClick={handleFbLogin}
            data-testid='fb-login-button'
            disabled={isSubmitting}
          >
            Continue with Facebook
          </Button>
        </Flex>
        {isSubmitting && (
          <Spinner />
        )}
      </Box>
    </Container>
  );
};
