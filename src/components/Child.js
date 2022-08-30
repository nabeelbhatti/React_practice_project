import React from "react";

const Child = (props) => {
  return (
    <div>
      <button onClick={()=>props.greetHandler('Child')}>child</button>
    </div>
  );
};

export default Child;
