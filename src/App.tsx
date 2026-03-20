import "./App.css";
import { Button, ButtonGroup } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Button>Click me</Button>
      <Button variant="solid">Solid</Button>
      <Button variant="subtle">Subtle</Button>
      <Button variant="surface">Surface</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="plain">Plain</Button>

      <Button colorPalette="yellow">Change Color</Button>
      <Button colorPalette="blue">Change Color</Button>
      <Button colorPalette="blue" variant="subtle">
        light blue
      </Button>
    </>
  );
}

export default App;

// For Styling we gonna use Chakra UI
// - Go to chakra-ui.com
// - Start Building -> Vite
// - Copy in terminal -> npm i @chakra-ui/react @emotion/react
// - Copy in Terminal -> npx @chakra-ui/cli snippet add (to build your UI faster)
// - Copy in main.tsx ->import { Provider } from "@/components/ui/provider"
// - Wrap <App/> into <Provider></Provider> => <Provider><App/></Provider>
// - Copy ->  "paths": {"@/*": ["./src/*"]} in tsconfig.app.json
// - Copy in Terminal -> npm i -D vite-tsconfig-paths
// - Copy -> tsconfigPaths() like -> plugins: [react(), tsconfigPaths()], in vite.config.ts
// - And import -> import tsconfigPaths from "vite-tsconfig-paths" in vite.config.ts
// - Now go to Components in chakra Website and ENJOY!
