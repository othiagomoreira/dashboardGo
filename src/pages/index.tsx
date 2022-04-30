import Head from 'next/head';
import { Button, Flex } from '@chakra-ui/react';
import { Input } from '../components/Form/Input';

import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { signInFormSchema } from '../utils/validation';

type SignInFormData = {
  email: string;
  password: string;
};

const SignIn = () => {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema),
  });

  const handleSignIn: SubmitHandler<SignInFormData> = (data) => {
    console.log(data);
  };

  return (
    <>
      <Head>
        <title>Dashgo</title>
      </Head>

      <Flex
        h="100vh"
        align="center"
        justify="center"
        p={{ base: '4', sm: '0' }}
      >
        <Flex
          as="form"
          w="100%"
          gap="4"
          maxW={360}
          bg="gray.800"
          p="8"
          borderRadius={4}
          flexDir="column"
          onSubmit={handleSubmit(handleSignIn)}
        >
          <Input
            type="email"
            label="E-mail"
            error={formState.errors.email}
            {...register('email')}
          />

          <Input
            type="password"
            label="Password"
            error={formState.errors.password}
            {...register('password')}
          />

          <Button type="submit" mt="4" colorScheme="pink" size="lg">
            Entrar
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default SignIn;
