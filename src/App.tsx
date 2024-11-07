import React from "react";
import "./App.css";
import { useEffect, useRef } from "react";
import useCounter from "./hooks/useCounter";
// TYPESCRIPT KEY CONCEPTS
import ATiposBasicos from "./components/typescript/ATiposBasicos";
import BTiposDeObjetos from "./components/typescript/BTiposDeObjetos";
import CInterfaces from "./components/typescript/CInterfaces";
import DFuncionesTypadas from "./components/typescript/DFuncionesTypadas";
import ETiposGenericos from "./components/typescript/ETiposGenericos";
import FClasesYModificadoresDeAcceso from "./components/typescript/FClasesYModificadoresDeAcceso";
import GEnums from "./components/typescript/GEnums";
import HOptionalTypesAndPredefinedValues from "./components/typescript/HOptionalTypesAndPredefinedValues";
// REACT KEY CONCEPTS
import AFunctionalComponents from "./components/react/AFunctionalComponents";
import BJSX from "./components/react/BJSX";

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
      <hr />
      <h1>REACT KEY CONCEPTS</h1>
      <AFunctionalComponents />
      <hr />
      <BJSX />
    </div>
  );
}

export default App;
