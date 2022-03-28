import React from "react";
import {
  Box,
  Drawer, DrawerBody, DrawerCloseButton,
  DrawerContent, DrawerHeader,
} from "@chakra-ui/core";
import FavoriteItem from "../content/favorites/favorite-item";
import {Star} from "react-feather";

export function LayoutDrawer({favorites, favBtnRef, isOpen, onClose, removeFavorite, children}) {
  return (
    <Box minH="100vh">
      <Drawer
        autoFocus={false}
        onOverlayClick={onClose}
        isOpen={isOpen}
        placement='right'
        size='md'
        onClose={onClose}
        finalFocusRef={favBtnRef}
      >
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader textAlign="center" borderBottomWidth="1px">Favorites ({(favorites?.length)})</DrawerHeader>

          <DrawerBody>
            {!!favorites?.length && favorites.map((item) => (
              <FavoriteItem favorite={item} removeFavorite={removeFavorite} key={item.id} />
            ))}
            {!favorites?.length && <Box d="flex" alignItems="center" flexDirection="column" my={8}>
              <Box as={Star} height={20} width={20} color="yellow.400"/>
              <Box as="h3" fontSize={24} my={4}>No favorites yet!</Box>
            </Box>}
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      <Box>
        {children}
      </Box>
    </Box>
  );
}
