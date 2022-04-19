import React from "react";
import "../styles.css";
import { LoginForm } from "./LoginForm";
import logo from "./logo.png";
import { TitleBar, Logo } from "./general";

export class Login extends React.Component {
  render() {
    return (
      <div>
        <TitleBar title="Log in to your account" />
        <Logo logo={logo} />
        <LoginForm />
      </div>
    );
  }
}

export default Login;
