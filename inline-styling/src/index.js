import React from "react";
import ReactDOM from "react-dom";

//Use commas to seperate CSS values in Javascript
const customStyle = {
  color: "red",
  fontSize: "20px",
  border: "1px solid black",
};

customStyle.color = "blue";

ReactDOM.render(
  <h1 style={customStyle}>Hello World!</h1>,
  document.getElementById("root")
);
