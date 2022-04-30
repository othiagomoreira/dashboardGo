import Head from 'next/head';
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  SimpleGrid,
  VStack,
} from '@chakra-ui/react';

import Link from 'next/link';
import { Input } from '../../components/Form/Input';
import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';

import { SubmitHandler, useForm } from 'react-hook-form';
import { createUserFormSchema } from '../../utils/validation';
import { yupResolver } from '@hookform/resolvers/yup';

type CreateUserFormData = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
};

const CreateUsers = () => {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(createUserFormSchema),
  });

  const handleCreateUser: SubmitHandler<CreateUserFormData> = (data) => {
    console.log(data.password_confirmation);
  };

  return (
    <>
      <Head>
        <title>Dashgo | Create users</title>
      </Head>

      <Box>
        <Header />
        <Flex w="100%" my="6" maxWidth={1380} mx="auto" px="6">
          <Sidebar />

          <Box
            as="form"
            flex="1"
            borderRadius={8}
            p={['6', '8']}
            bgColor="gray.800"
            onSubmit={handleSubmit(handleCreateUser)}
          >
            <Heading size="lg" fontWeight="normal">
              Criar usuário
            </Heading>

            <Divider my="6" borderColor="gray.700" />

            <VStack spacing={['4', '6', '8']}>
              <SimpleGrid minChildWidth="240px" w="100%" spacing={['4', '6']}>
                <Input
                  label="Nome Completo"
                  error={formState.errors.name}
                  {...register('name')}
                />
                <Input
                  type="email"
                  label="E-mail"
                  error={formState.errors.email}
                  {...register('email')}
                />
              </SimpleGrid>

              <SimpleGrid minChildWidth="240px" w="100%" spacing={['4', '6']}>
                <Input
                  type="password"
                  label="Senha"
                  error={formState.errors.password}
                  {...register('password')}
                />
                <Input
                  type="password"
                  label="Confirme a senha"
                  error={formState.errors.password_confirmation}
                  {...register('password_confirmation')}
                />
              </SimpleGrid>
            </VStack>

            <Flex justify="flex-end" mt="8" gap="4">
              <Link href="/users" passHref>
                <Button as="a" colorScheme="whiteAlpha">
                  Cancelar
                </Button>
              </Link>
              <Button type="submit" colorScheme="pink">
                Enviar
              </Button>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default CreateUsers;
