// theme.ts
import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  // your customizations here (semanticTokens, recipes, etc.)
});

export default createSystem(defaultConfig, config);
