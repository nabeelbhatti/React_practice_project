import React from "react";
import "./myStyle.css";

const StyleSheet = (props) => {
  const className = props.primary ? "primary" : "";
  return (
    <div>
      <h1 className={`${className} font-xl`}>StyleSheets</h1>
    </div>
  );
};

export default StyleSheet;
