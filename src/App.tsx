import React from "react";
import "./App.css";
import { useEffect, useRef } from "react";
import useCounter from "./hooks/useCounter";
// KEY CONCEPTS
import ATiposBasicos from "./components/ATiposBasicos";

function App() {
  const { count, increment, decrement, reset } = useCounter(0);
  const countRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (countRef.current) {
      if (count > 0) {
        countRef.current.style.color = "green";
      } else if (count < 0) {
        countRef.current.style.color = "red";
      } else {
        countRef.current.style.color = "black";
      }
    }
  }, [count]);

  return (
    <div style={{ textAlign: `center`, marginTop: `50px` }}>
      <h1>Counter</h1>
      <p ref={countRef}>
        Current value: <strong>{count}</strong>
      </p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <br/>
      <ATiposBasicos/>
    </div>
  );
}

export default App;
