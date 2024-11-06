const BTiposDeObjetos = () => {
  type User = {
    name: string;
    age: number;
    isAdmin: boolean;
  };

  const user: User = {name: "Bob", age: 25, isAdmin: false}
  return (
    <div>
      <h2>Object Types</h2>
      {user.name} | {user.age} | {user.isAdmin ? "true" : "false"}
    </div>
  );
};

export default BTiposDeObjetos;
