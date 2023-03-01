import { useState } from "react";
import { Button, ContextProvider, Page, Paragraph } from "./components/index";

function App() {
  const [count, setCount] = useState(0);

  return (
    <ContextProvider>
      <Page title="Craven UI">
        <Paragraph>A simple UI library</Paragraph>
        <Button>Hello World</Button>
      </Page>
    </ContextProvider>
  );
}

export default App;
