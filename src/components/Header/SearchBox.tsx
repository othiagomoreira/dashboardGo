import { Flex, Input, Icon, useBreakpointValue } from '@chakra-ui/react';
import { useRef, useState } from 'react';
import { RiSearchLine } from 'react-icons/ri';

export const SearchBox = () => {
  // Controlled Components
  const [search, setSearch] = useState('');

  const showSearchBox = useBreakpointValue({
    base: false,
    lg: true,
  });

  if (!showSearchBox) return null;

  return (
    <Flex
      as="label"
      flex="1"
      py="4"
      px="8"
      ml="6"
      maxWidth={400}
      alignSelf="center"
      color="gray.200"
      pos="relative"
      bgColor="gray.800"
      borderRadius="full"
    >
      <Input
        color="gray.50"
        variant="unstyled"
        placeholder="Buscar na plataforma"
        _placeholder={{ color: 'gray.400' }}
        px="4"
        mr="4"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <Icon as={RiSearchLine} fontSize="20" cursor="pointer" />
    </Flex>
  );
};
