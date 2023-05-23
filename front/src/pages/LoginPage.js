import React from "react";
import LoginComponent from "../components/LoginComponent";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { logoutAccount } from "../store/actions/userActions";
import SignupComponent from "../components/SignupComponent";
import { useNavigate } from "react-router";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let checkLocalStorage = localStorage.getItem("userId");
  return (
    <div>
      {checkLocalStorage ? (
        <Button
          onClick={() => {
            dispatch(logoutAccount());
            navigate("/");
          }}
        >
          Logout
        </Button>
      ) : (
        <>
          <LoginComponent />
          <SignupComponent />
        </>
      )}
    </div>
  );
};

export default LoginPage;
