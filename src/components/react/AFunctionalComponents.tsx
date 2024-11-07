const AFunctionalComponents = () => {
  function Greeting() {
    return <h3>Hello, from functional component</h3>;
  }
  return (
    <div>
      <h2>Functional components</h2>
      {Greeting()}
    </div>
  );
};

export default AFunctionalComponents;
