import { Button } from '@chakra-ui/react';

interface PaginationItemProps {
  pageNumber: number;
  isCurrent?: boolean;
  onPageChange: (page: number) => void;
}

export const PaginationItem = ({
  pageNumber,
  isCurrent = false,
  onPageChange,
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
      onClick={() => onPageChange(pageNumber)}
      {...rest}
    >
      {pageNumber}
    </Button>
  );
};
