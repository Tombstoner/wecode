import React from "react";
import Login from "../components/login/Login";

const LoginPage = (props) => {
  return (
    <>
      <Login user={props.user} setuser={props.setuser} />
    </>
  );
};

export default LoginPage;
