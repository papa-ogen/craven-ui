import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Button } from "./components";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Craven UI</h1>
      <Button text="Hello World" />
    </div>
  );
}

export default App;
