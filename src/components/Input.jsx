import React from "react";

const Input = (props) => {
  return (
    <div className="mb-2">
      <input
        type={props.type}
        className="form-control"
        placeholder={props.placeholder}
        required="required"
      />
    </div>
  );
};
export default Input;
