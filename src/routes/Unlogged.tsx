import React from "react";
import { Route } from "react-router-dom";
import Landing from "../pages/Landing";
import LoginPage from "../pages/LoginPage";
import RecoverPassword from "../pages/RecoverPassword";
import SignUpPage from "../pages/SignUpPage";

export default function Unlogged() {
  return (
    <>
      <Route component={Landing} exact path="/" />
      <Route component={LoginPage} path="/login" />
      <Route component={RecoverPassword} path="/recover-password" />
      <Route component={SignUpPage} path="/sign-up" />
    </>
  );
}
