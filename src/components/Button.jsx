import React from "react";

const Button = (props) => {
  return (
    <div className="mb-2">
      <button type={props.type} className="btn btn-light btn-block w-100">
        {props.value}
      </button>
    </div>
  );
};
export default Button;
