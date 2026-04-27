import { HStack, Text } from "@chakra-ui/react";
import { Switch } from "@/components/ui/switch";
import { useColorMode } from "@/components/ui/color-mode";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Switch
        colorScheme="green"
        checked={colorMode === "dark"}
        onCheckedChange={({ checked }) => {
          if (
            (checked && colorMode === "light") ||
            (!checked && colorMode === "dark")
          ) {
            toggleColorMode();
          }
        }}
      />
      <Text>Dark Mode</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
