import { Button } from '@chakra-ui/react';

interface PaginationItemProps {
  pageNumber: number;
  isCurrent?: boolean;
}

export const PaginationItem = ({
  pageNumber,
  isCurrent = false,
  ...rest
}: PaginationItemProps) => {
  if (isCurrent) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        w="4"
        colorScheme="pink"
        disabled
        _disabled={{ bgColor: 'pink.500', cursor: 'pointer' }}
        {...rest}
      >
        {pageNumber}
      </Button>
    );
  }

  return (
    <Button
      size="sm"
      fontSize="xs"
      w="4"
      bgColor="gray.700"
      _hover={{ bgColor: 'gray.500' }}
      {...rest}
    >
      {pageNumber}
    </Button>
  );
};
