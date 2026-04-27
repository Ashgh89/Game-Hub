// main.tsx
import { ChakraProvider } from "@chakra-ui/react";
import { ColorModeProvider } from "@/components/ui/color-mode";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import theme from "./theme.ts";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider value={theme}>
      <ColorModeProvider>
        <App />
      </ColorModeProvider>
    </ChakraProvider>
  </StrictMode>,
);

// All we wanted was just darkMode in ChakraUI.
// I just use ChatGPT because it was complicated
