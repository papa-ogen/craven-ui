import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Button, Page } from "./index";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="dark bg-gray-1 text-slate-12 min-h-screen">
      <Page title="Craven UI">
        <Button>Hello World</Button>
      </Page>
    </div>
  );
}

export default App;
