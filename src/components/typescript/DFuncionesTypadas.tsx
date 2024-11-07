const DFuncionesTypadas = () => {
  function greet(name: string): string {
    return `Hello ${name}`;
  }
  return (
    <div>
      <h2>Typed Functions</h2>
      {greet("Dwaxgio")}
    </div>
  );
};

export default DFuncionesTypadas;
