import {
  Link as ChakraLink,
  Icon,
  Text,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/react';
import React from 'react';

interface NavLinkProps extends ChakraLinkProps {
  icon: React.ElementType; // Recebe os icons em forma de texto
  href: string;
}

export const NavLink = ({ icon, children, ...rest }: NavLinkProps) => {
  return (
    <ChakraLink d="flex" align="center" {...rest}>
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="medium">
        {children}
      </Text>
    </ChakraLink>
  );
};
