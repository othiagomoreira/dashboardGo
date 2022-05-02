import Head from 'next/head';
import Link from 'next/link';
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Spinner,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
} from '@chakra-ui/react';

import { RiAddLine, RiPencilLine } from 'react-icons/ri';
import { Header } from '../../components/Header';
import { Pagination } from '../../components/Pagination';
import { Sidebar } from '../../components/Sidebar';
import { useUsers } from '../../services/hooks/useUsers';
import { useState } from 'react';

const UserList = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isFetching, error } = useUsers(page);

  const showRegistrationDate = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <>
      <Head>
        <title>Dashgo | Users</title>
      </Head>
      <Box>
        <Header />

        <Flex w="100%" my="6" maxWidth={1380} mx="auto" px="6" overflowX="auto">
          <Sidebar />

          <Box flex="1" borderRadius={8} p="8" bgColor="gray.800">
            <Flex mb="8" justify="space-between" alignItems="center">
              <Heading size="lg" fontWeight="normal">
                Usuários
                {!isLoading && isFetching && (
                  <Spinner size="sm" color="gray.500" ml="4" />
                )}
              </Heading>

              <Link href="/users/create" passHref>
                <Button
                  as="a"
                  size="sm"
                  fontSize="sm"
                  colorScheme="pink"
                  leftIcon={<Icon as={RiAddLine} fontSize={20} />}
                  cursor="pointer"
                >
                  Criar novo
                </Button>
              </Link>
            </Flex>

            {isLoading ? (
              <Flex justify="center">
                <Spinner />
              </Flex>
            ) : error ? (
              <Flex justify="center">
                <Text>Falha</Text>
              </Flex>
            ) : (
              <>
                <Table colorScheme="whiteAlpha">
                  <Thead>
                    <Tr>
                      <Th px="6" color="gray.300">
                        <Checkbox colorScheme="pink" />
                      </Th>
                      <Th>Usuário</Th>
                      {showRegistrationDate && <Th>Data de Cadastro</Th>}
                      <Th w="8"></Th>
                    </Tr>
                  </Thead>

                  <Tbody>
                    {data?.users.map((user) => {
                      return (
                        <Tr key={user.id}>
                          <Td px="6">
                            <Checkbox colorScheme="pink" />
                          </Td>
                          <Td>
                            <Box>
                              <Text fontWeight="bold">{user.name}</Text>
                              <Text fontSize="sm" color="gray.300">
                                {user.email}
                              </Text>
                            </Box>
                          </Td>
                          {showRegistrationDate && <Td>{user.createdAt}</Td>}
                          <Td>
                            <Button
                              as="a"
                              size="sm"
                              fontSize="sm"
                              colorScheme="purple"
                              leftIcon={
                                <Icon as={RiPencilLine} fontSize={16} />
                              }
                              cursor="pointer"
                            >
                              Editar
                            </Button>
                          </Td>
                        </Tr>
                      );
                    })}
                  </Tbody>
                </Table>
                <Pagination
                  totalCountOfRegisters={data?.totalCount as number}
                  currentPage={page}
                  onPageChange={setPage}
                />
              </>
            )}
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default UserList;
