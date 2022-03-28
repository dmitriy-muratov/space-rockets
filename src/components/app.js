import React from "react";
import { Routes, Route } from "react-router-dom";
import {Button, Flex, Text, useColorMode, ThemeProvider, ColorModeProvider} from "@chakra-ui/core";

import Launches from "./content/launches/launches";
import Launch from "./content/launches/launch";
import Home from "./pages/home/home";
import LaunchPads from "./content/launch-pads/launch-pads";
import LaunchPad from "./content/launch-pads/launch-pad";
import {Moon, Sun} from "react-feather";
import {Theme} from "../services/styling";
import {useTheme} from "emotion-theming";

export default function App() {
  return (
    <ThemeProvider theme={useTheme()}>
      <ColorModeProvider>
        <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/launches" element={<Launches />} />
            <Route path="/launches/:launchId" element={<Launch />} />
            <Route path="/launch-pads" element={<LaunchPads />} />
            <Route path="/launch-pads/:launchPadId" element={<LaunchPad />} />
          </Routes>
      </ColorModeProvider>
    </ThemeProvider>
  );
}

function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="6"
      bg={Theme().bgColorNavbar[colorMode]}
      color="white"
    >
      <Text
        fontFamily="mono"
        letterSpacing="2px"
        fontWeight="bold"
        fontSize="lg"
      >
        ¡SPACE·R0CKETS!
      </Text>

      <Button as={colorMode === 'light' ? Moon : Sun} onClick={toggleColorMode}
              bg={Theme().bgColorButton[colorMode]} _hover={Theme().bgColorButton[colorMode]} height={12} width={12} cursor="pointer" p={3}/>
    </Flex>
  );
}
