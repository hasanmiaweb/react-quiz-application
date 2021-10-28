import { Link } from "@reach/router";
import React from "react";
import LoginImage from "../../assets/images/login.svg";
import classes from "../../styles/Login.module.css";
import Button from "../Button";
import Form from "../Form";
import Illustration from "../Illustration";
import TextInput from "../TextInput";

const Login = () => {
  return (
    <div>
      <h1>Login to your account</h1>
      <div className="column">
        <Illustration images={LoginImage} />
        <Form className={`${classes.login}`}>
          <TextInput
            type="text"
            placeholder="Enter Email"
            icon="alternate_email"
          />
          <TextInput type="password" placeholder="Enter Password" icon="lock" />
          <Button>Login Now</Button>
          <div className="info">
            Don't have an account? <Link to="/signup">Signup</Link> instead.
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
