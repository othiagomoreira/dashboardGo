import { Box, Flex, HStack } from '@chakra-ui/react';
import { PaginationItem } from './PaginationItem';

export const Pagination = () => {
  return (
    <Flex mt="8" justify="space-between" alignItems="center">
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>

      <HStack spacing="2">
        <PaginationItem pageNumber={1} isCurrent />
        <PaginationItem pageNumber={2} />
        <PaginationItem pageNumber={3} />
        <PaginationItem pageNumber={4} />
      </HStack>
    </Flex>
  );
};
