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

const CreateUsers = () => {
  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1380} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} p={['6', '8']} bgColor="gray.800">
          <Heading size="lg" fontWeight="normal">
            Criar usuário
          </Heading>

          <Divider my="6" borderColor="gray.700" />

          <VStack spacing={['4', '6', '8']}>
            <SimpleGrid
              minChildWidth="240px"
              w="100%"
              spacing={['4', '6', '8']}
            >
              <Input name="name" label="Nome Completo" />
              <Input name="email" type="email" label="E-mail" />
            </SimpleGrid>

            <SimpleGrid
              minChildWidth="240px"
              w="100%"
              spacing={['4', '6', '8']}
            >
              <Input name="password" type="password" label="Senha" />
              <Input
                name="password_confirmation"
                type="password"
                label="Confirme a senha"
              />
            </SimpleGrid>
          </VStack>

          <Flex justify="flex-end" mt="8" gap="4">
            <Link href="/users" passHref>
              <Button as="a" colorScheme="whiteAlpha">
                Cancelar
              </Button>
            </Link>
            <Button colorScheme="pink">Cancelar</Button>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default CreateUsers;
