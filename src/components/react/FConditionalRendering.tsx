const FConditionalRendering = () => {
  const isLoggedIn = true;
  return (
    <div>
      <h2>Conditional Rendering</h2>
      {isLoggedIn ? <h3>Welcome back</h3> : <h3>Please sign in</h3>}
    </div>
  );
};

export default FConditionalRendering;
