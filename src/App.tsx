import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Button } from "./components";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Craven UI</h1>
      <Button />
    </div>
  );
}

export default App;
