import React from "react";
import ReactDOM from "react-dom";

const Box = (props) => {
  return (
    <div>
      <h1
        className={`alert alert-${
          props.type === "blue"
            ? "primary"
            : props.type === "red"
            ? "danger"
            : props.type === "orange"
            ? "warning"
            : null
        } role="alert" ${props.message === "Hidden box" ? "d-none" : null}`}
      >
        {props.message}
      </h1>
    </div>
  );
};

// Do not edit below this line
const jsx = (
  <>
    <Box type="blue" message="Blue box" />
    <Box type="red" message="Red box" />
    <Box type="orange" message="Orange box" />
    <Box hide type="red" message="Hidden box" />
  </>
);
const element = document.getElementById("target");

ReactDOM.render(jsx, element);
