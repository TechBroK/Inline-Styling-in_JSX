import React from "react";
import ReactDOM from "react-dom";
import { Fragment } from "react";

const customStyle = {
  color: "red",
  fontSize: "20px",
  border: "2px solid green",
};
//customStyle.border = "2px solid black";
ReactDOM.render(
  <>
    <h1 style={customStyle}>Hello World!</h1>
    <p style={customStyle}>
      McKinsey Problem Solving Framework <br /> • Who or what can stop you from
      implementing the solution? This is a complex problem and the without
      adequate funding and the cooperation of many different people, it will not
      be solved.
    </p>
  </>,
  document.getElementById("root")
);
