export function Theme() {
  const bgColor = {light: lightBg, dark: darkBg};
  const bgColorButton = {light: buttonLightBg, dark: buttonDarkBg};
  const bgColorNavbar = {light: navbarLightBg, dark: navbarDarkBg};
  const bgColorCard = {light: cardLightBg, dark: cardDarkBg};
  const borderColorCard = {light: cardLightBorder, dark: cardDarkBorder};
  const tileColorCard = {light: cardLightTile, dark: cardDarkTile};
  const textColor = {light: lightModeText, dark: darkModeText};

  return {
    bgColor, textColor, bgColorNavbar, bgColorButton, bgColorCard, borderColorCard, tileColorCard
  }
}

//background color
export const darkBg = "gray.600";
export const lightBg = "white";
export const navbarDarkBg = "gray.800";
export const navbarLightBg = "gray.700";
export const buttonDarkBg = "gray.700";
export const buttonLightBg = "gray.500";
export const cardDarkBg = "purple.900";
export const cardLightBg = "white";
export const cardDarkBorder = "gray.600";
export const cardLightBorder = "gray.200";
export const cardDarkTile = "gray.300";
export const cardLightTile = "gray.50";

//text color
export const lightModeText = "gray.900"
export const darkModeText = "gray.100"
