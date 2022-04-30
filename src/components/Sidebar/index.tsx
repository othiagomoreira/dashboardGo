import { Box } from '@chakra-ui/layout';
import {
  useBreakpointValue,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
} from '@chakra-ui/react';
import React from 'react';
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext';
import { SidebarNav } from './SidebarNav';

export const Sidebar = () => {
  const { isOpen, onClose } = useSidebarDrawer();

  const isDrawerSidebar = useBreakpointValue({
    base: true,
    md: false,
  });

  if (isDrawerSidebar) {
    return (
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        closeOnEsc
        closeOnOverlayClick
      >
        <DrawerOverlay>
          <DrawerContent bg="gray.800" p="4">
            <DrawerCloseButton mt="6" />
            <DrawerHeader>Navegação</DrawerHeader>
            <DrawerBody>
              <SidebarNav />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    );
  }

  return (
    <Box as="aside" w="64" mr="8">
      <SidebarNav />
    </Box>
  );
};
