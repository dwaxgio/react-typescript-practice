const ETiposGenericos = () => {
  function identity<T>(value: T): T {
    return value;
  }
  let result = identity<string>("Hello");
  return (
    <div>
      <h2>Generic Types</h2>
      {result}
    </div>
  );
};

export default ETiposGenericos;
