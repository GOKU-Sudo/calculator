import { useState, useRef } from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  function handleOperation(operation, e) {
    e.preventDefault();
    const inputValue = Number(inputRef.current.value);

    switch (operation) {
      case "plus":
        setResult(result + inputValue);
        break;
      case "minus":
        setResult(result - inputValue);
        break;
      case "times":
        setResult(result * inputValue);
        break;
      case "divide":
        // Handle division by zero gracefully
        if (inputValue !== 0) {
          setResult(result / inputValue);
        } else {
          alert("Cannot divide by zero!");
          setResult(0);
        }
        break;
      default:
        console.error("Invalid operation:", operation);
    }

    // Clear the input after each operation
    inputRef.current.value = "";
  }

  function resetInput(e) {
    e.preventDefault();
    inputRef.current.value = "";
  }

  function resetResult(e) {
    e.preventDefault();
    setResult(0);
  }

  return (
    <div className="App">
      <div>
        <h1>Simplest Working Calculator</h1>
      </div>
      <form>
        <p ref={resultRef}>{result}</p>
        <input
          pattern="[0-9]"
          ref={inputRef}
          type="number"
          placeholder="Type a number"
        />
        <button onClick={handleOperation.bind(null, "plus")}>add</button>
        <button onClick={handleOperation.bind(null, "minus")}>subtract</button>
        <button onClick={handleOperation.bind(null, "times")}>multiply</button>
        <button onClick={handleOperation.bind(null, "divide")}>divide</button>
        <button onClick={resetInput}>Reset Input</button>
        <button onClick={resetResult}>Reset Result</button>
      </form>
    </div>
  );
}

export default App;
