import { Box, Flex, SimpleGrid, Text, theme } from '@chakra-ui/react';
import { ChartContent } from '../components/Dashboard/ChartContent';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';

const Dashboard = () => {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <SimpleGrid
          flex="1"
          gap="4"
          minChildWidth={320}
          alignItems="flex-start"
        >
          <ChartContent chartTitle="Inscritos da semana" />
          <ChartContent chartTitle="Taxa de abertura" />
        </SimpleGrid>
      </Flex>
    </Flex>
  );
};

export default Dashboard;
