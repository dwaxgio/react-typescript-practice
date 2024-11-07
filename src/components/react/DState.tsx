import React, { useState } from "react";

const DState = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>State</h2>
      {count}
      <br />
      <button onClick={() => setCount(count + 1)}>Add to counter</button>
      <button onClick={() => setCount(count - 1)}>Rest to counter</button>
      <button onClick={() => setCount(0)}>Reset counter</button>
    </div>
  );
};

export default DState;
