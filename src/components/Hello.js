import React from "react";

export const Hello = () => {
  return (
    <div className="dummyClass">
      <h1>I am from Hello Component which is Functional Based Component</h1>
    </div>
  );
  // return React.createElement(
  //     'div',
  //     {id: 'hello', className: 'dummyClass'},
  //     React.createElement('h1', null, 'I am from Hello Component which is Functional Based Component')
  // )
};
