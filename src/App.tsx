import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Button, CravenUIContext, Page, Paragraph } from "./index";

function App() {
  const [count, setCount] = useState(0);

  return (
    <CravenUIContext>
      <Page title="Craven UI">
        <Paragraph>A simple UI library</Paragraph>
        <Button>Hello World</Button>
      </Page>
    </CravenUIContext>
  );
}

export default App;
