const GListsAndKeys = () => {
  const numbers = [1, 2, 3, 4, 5];
  const listItems = numbers.map((number) => <li key={number}>{number}</li>)
  return (
    <div>
      <h2>Lists and keys</h2>
      <ul>{listItems}</ul>
    </div>
  );
};

export default GListsAndKeys;
