import React from "react";
import {Flex, Box, Text, Stack, Link, useColorMode} from "@chakra-ui/core";
import {ArrowRight} from "react-feather";
import {Link as BrowserLink} from "react-router-dom";
import {Theme} from "../../../services/styling";

export default function Home() {
  const {colorMode} = useColorMode();

  return (
    <Box minHeight="100vh" p={4} bg={Theme().bgColor[colorMode]}>
      <Stack m="6" spacing="6">
        <PageLink url="/launches" borderColor={Theme().borderColorCard[colorMode]}
                  bg={Theme().tileColorCard[colorMode]}>Browse SpaceX Launches</PageLink>
        <PageLink url="/launch-pads" borderColor={Theme().borderColorCard[colorMode]}
                  bg={Theme().tileColorCard[colorMode]}>Browse SpaceX Launch Pads</PageLink>
      </Stack>
    </Box>
  );
}

function PageLink({url, children, ...rest}) {
  return (
    <Link as={BrowserLink}
          to={url} {...rest}>
      <Flex
        justifyContent="space-between"
        p="6"
        boxShadow="md"
        borderWidth="1px"
        rounded="lg"
      >
        <Text fontSize="lg">{children}</Text>
        <Box as={ArrowRight}/>
      </Flex>
    </Link>
  );
}
