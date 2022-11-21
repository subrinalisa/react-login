import React from "react";
import Button from "./Button";
import Input from "./Input";

const Form = (props) => {
  let loginText = props.isRegister ? "Login" : "Register";
  return (
    <div className="container my-5">
      <h1>{loginText}</h1>
      <div className="row justify-content-center">
        <div className="col-md-4">
          <form action="#" method="post">
            <Input type="text" placeholder="Username" />
            <Input type="password" placeholder="Password" />
            {!props.isRegister && (
              <Input type="password" placeholder="Confirm Password" />
            )}
            <Button type="submit" value={loginText} />
          </form>
        </div>
      </div>
    </div>
  );
};
export default Form;
