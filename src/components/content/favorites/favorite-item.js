import React from "react";
import {Badge, Box} from "@chakra-ui/core";
import {Trash2} from "react-feather";
import {Link} from "react-router-dom";

export default function FavoriteItem({favorite, removeFavorite}) {
  return (
    <Box
      as={Link}
      to={`/${favorite.category}/${favorite.id.toString()}`}
      d="flex"
      flexDirection="column"
      boxShadow="md"
      borderWidth="1px"
      rounded="lg"
      overflow="hidden"
      position="relative"
      p="4"
      mt={6}
    >
      <Box d="flex" alignItems="baseline">
        <Badge px="2" variant="solid" variantColor="pink">
          {favorite.type}
        </Badge>

        <Box
          color="gray.700"
          fontWeight="semibold"
          letterSpacing="wide"
          fontSize="xs"
          textTransform="uppercase"
          ml="2"
        >
          {favorite.name}
        </Box>
      </Box>

      <Box position="absolute" top="2" right="2"
           height={5} width={5} as={Trash2} ml="2" cursor="pointer"
           onClick={(e) => removeFavorite(e, favorite)}
      />

      <Box d="flex" alignItems="center" mt={1} fontSize={14} color="gray.500">{favorite.details}</Box>
    </Box>
  );
}
