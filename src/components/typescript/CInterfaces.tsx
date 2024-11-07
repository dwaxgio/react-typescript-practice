const CInterfaces = () => {
  interface Product {
    id: number;
    name: string;
  }

  const product: Product = { id: 1, name: "Laptop" };
  return (
    <div>
      <h2>Interfaces</h2>
      {product.id} | {product.name}
    </div>
  );
};

export default CInterfaces;
