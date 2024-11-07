import React from "react";

const CProps = (props: {name:string}) => {
  return (
    <div>
      <h2>PROPS</h2>
      <h3>Hello, {props.name} from prop</h3> 
    </div>
  );
};

export default CProps;
