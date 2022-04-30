import Head from 'next/head';
import { Flex, SimpleGrid } from '@chakra-ui/react';
import { ChartContent } from '../components/Dashboard/ChartContent';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';

const Dashboard = () => {
  return (
    <>
      <Head>
        <title>Dashgo | Dashboard</title>
      </Head>

      <Flex direction="column" minH="100vh">
        <Header />

        <Flex w="100%" my="6" maxWidth={1380} mx="auto" px="6">
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
    </>
  );
};

export default Dashboard;
