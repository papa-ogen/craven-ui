import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Button, CravenUIContext, Page } from "./index";

function App() {
  const [count, setCount] = useState(0);

  return (
    <CravenUIContext>
      <Page title="Craven UI">
        <Button>Hello World</Button>
      </Page>
    </CravenUIContext>
  );
}

export default App;
