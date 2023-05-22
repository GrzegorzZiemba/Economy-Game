import React from "react";
import { useDispatch } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { loginAccount } from "../store/actions/userActions";
import { Button } from "react-bootstrap";
import "../index.css";
import { useNavigate } from "react-router";

const LoginComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={Yup.object({
        email: Yup.string(),
        password: Yup.string(),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          setSubmitting(false);
          dispatch(
            loginAccount({ email: values.email, password: values.password })
          );
        }, 400);
        setTimeout(() => {
          navigate("/trading");
        }, 1050);
      }}
    >
      <Form>
        <label htmlFor="email">E-mail</label>
        <Field
          style={{ size: "200px", width: "100%" }}
          name="email"
          type="text"
        />
        <ErrorMessage name="email" component="div" style={{ color: "red" }} />

        <label htmlFor="password">Password</label>
        <Field
          style={{ size: "200px", width: "100%" }}
          name="password"
          type="password"
        />
        <ErrorMessage
          name="password"
          component="div"
          style={{ color: "red" }}
        />

        <Button className="button-main" type="submit">
          Submit
        </Button>
      </Form>
    </Formik>
  );
};

export default LoginComponent;
