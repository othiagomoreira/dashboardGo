import { Flex, Box, Avatar, Text } from '@chakra-ui/react';
import React from 'react';

interface ProfileProps {
  showProfileData?: boolean;
}

export const Profile = ({ showProfileData = true }: ProfileProps) => {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Thiago Moreira</Text>
          <Text color="gray.300" fontSize="small">
            contatothiagomoreira@outlook.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Thiago  Moreira"
        src="https://github.com/othiagomoreira.png"
      />
    </Flex>
  );
};
