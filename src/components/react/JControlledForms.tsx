import React, { useState } from "react";

const JControlledForms = () => {
  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(`Submitted: ${value}`);
  };
  return (
    <div>
      <h2>Controlled forms</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={handleChange}></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default JControlledForms;
