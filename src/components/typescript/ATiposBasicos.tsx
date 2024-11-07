const ATiposBasicos = () => {
  // Nombre variable + tipo + inicializacion
  let age: number = 30;
  let name: string = "Alice";
  let isDeveloper: boolean = true;
  let id: string | number;
  id = "123";
  id = 456;

  return (
    <div>
      <h2>Data Types</h2>
      <ul>
        <li>Number: {age}</li>
        <li>String: {name}</li>
        <li>Boolean: {isDeveloper ? "true" : "false"}</li>
        <li>Union type: {id}</li>
      </ul>
    </div>
  );
};

export default ATiposBasicos;
