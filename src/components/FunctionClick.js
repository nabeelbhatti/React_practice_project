import React, { useState } from "react";

export const FunctionClick = () => {
  // const [message, setMessage] = useState('hi')
  // function clickHandler () {
  //  alert('Button is Clicked')
  // }

  // const clickHandler = () => {
  //     alert('button is clicked')
  // }
  const users = ["Nabeel", "Usman", "Nouman", "Shazi", "Talha"];
  const [count, setCount] = useState(0);
  function deleteUser(name) {
    const filteredItem = users.filter((item) => item !== name);
    console.log(filteredItem);
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(1)}>Click</button>
      <button value="hello Pakistan" onClick={(e) => alert(e.target.value)}>
        getValue
      </button>
      <ul>
        {users.map((name, index) => (
          <li key={index}>
            <button onClick={() => deleteUser(name)}>{name}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
