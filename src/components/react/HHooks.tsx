import React, { useEffect, useState } from "react";

const HHooks = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <h2>Hooks</h2>
      <p>Seconds: {seconds}</p>
    </div>
  );
};

export default HHooks;
