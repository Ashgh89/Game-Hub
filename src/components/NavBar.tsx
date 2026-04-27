import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
const NavBar = () => {
  // HStack: It stands for Horizontal Stack.
  // It puts items next to each other in a row (left → right)
  // It also adds spacing between them automatically
  return (
    <HStack justifyContent="space-between">
      <Image src={logo} boxSize="60px" />
      <ColorModeSwitch />
    </HStack>
  );
};
export default NavBar;

// 1. First create a file in components and name it NavBar.tsx
