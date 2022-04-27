import Head from 'next/head';
import { Button, Flex } from '@chakra-ui/react';
import { Input } from '../components/Form/Input';

const SignIn = () => {
  return (
    <>
      <Head>
        <title>Dashgo</title>
        <meta name="description" content="Dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex h="100vh" align="center" justify="center">
        <Flex
          as="form"
          w="100%"
          maxW={360}
          bg="gray.800"
          p="8"
          borderRadius={4}
          flexDir="column"
          gap="4"
        >
          <Input name="email" type="email" label="E-mail" />
          <Input name="password" type="password" label="Password" />

          <Button type="submit" mt="4" colorScheme="pink" size="lg">
            Entrar
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default SignIn;
