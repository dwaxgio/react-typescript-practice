const FClasesYModificadoresDeAcceso = () => {
  class Animal {
    private name: string;

    constructor(name: string) {
      this.name = name;
    }

    public getName(): string {
      return this.name;
    }
  }

  const newAnimal = new Animal("Tiger");
  return (
    <div>
      <h2>Classess and access modifiers</h2>
      {newAnimal.getName()}
    </div>
  );
};

export default FClasesYModificadoresDeAcceso;
