import React from "react";
import LoginComponent from "../components/LoginComponent";

const LoginPage = () => {
  let checkLocalStorage = localStorage.getItem("userId");
  return (
    <div>
      {checkLocalStorage ? <h1>{checkLocalStorage}</h1> : <LoginComponent />}
    </div>
  );
};

export default LoginPage;
