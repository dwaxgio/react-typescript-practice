const HOptionalTypesAndPredefinedValues = () => {
  function log(message: string, userId?: number): string {
    return `User ${userId ?? "Guest"} says: ${message}`;
  }
  return (
    <div>
      <h2>Optional Types And Predefined Values</h2>
      {log("Dwaxgio", 1)}
    </div>
  );
};

export default HOptionalTypesAndPredefinedValues;
