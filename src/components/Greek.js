import React from "react";
export const Greek = ({ name, age, heroName, children }) => {
  return (
    <div>
      <h1>
        My name is {name} and age is {age} and I am {heroName}
      </h1>
      {children}
    </div>
  );
};

// export default Greek;
