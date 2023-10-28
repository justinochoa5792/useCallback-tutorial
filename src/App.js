import { useState, useEffect, useCallback } from "react";
import "./App.css";

function App() {
  const [userInput, setUserInput] = useState("");
  const [result, setResult] = useState(0);
  const [number1] = useState(4);
  const [number2] = useState(5);

  const sum = useCallback(() => number1 + number2, [number1, number2]);
  const buildArray = useCallback(() => [number1, number2], [number1, number2]);

  useEffect(() => {
    console.log(`New sum. Value:${buildArray()}`);
    setResult(buildArray());
  }, [buildArray]);

  return (
    <div className="App">
      <input
        type="text"
        placeholder="input number"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <h1>Output: {userInput || ""}</h1>
      <p>Result: {JSON.stringify(result)}</p>
    </div>
  );
}

export default App;
