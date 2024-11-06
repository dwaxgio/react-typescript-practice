import React from "react";
import "./App.css";
import { useEffect, useRef } from "react";
import useCounter from "./hooks/useCounter";
// TYPESCRIPT KEY CONCEPTS
import ATiposBasicos from "./components/ATiposBasicos";
import BTiposDeObjetos from "./components/BTiposDeObjetos";
import CInterfaces from "./components/CInterfaces";
import DFuncionesTypadas from "./components/DFuncionesTypadas";
import ETiposGenericos from "./components/ETiposGenericos";
import FClasesYModificadoresDeAcceso from "./components/FClasesYModificadoresDeAcceso";
import GEnums from "./components/GEnums";
import HOptionalTypesAndPredefinedValues from "./components/HOptionalTypesAndPredefinedValues";

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
      <hr />
      <h1>TYPESCRIPT KEY CONCEPTS</h1>
      <ATiposBasicos />
      <hr />
      <BTiposDeObjetos />
      <hr />
      <CInterfaces />
      <hr />
      <DFuncionesTypadas />
      <hr />
      <ETiposGenericos />
      <hr />
      <FClasesYModificadoresDeAcceso />
      <hr />
      <GEnums />
      <hr />
      <HOptionalTypesAndPredefinedValues />
    </div>
  );
}

export default App;
