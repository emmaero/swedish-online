import React from "react";
import { Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";

export default function Unlogged() {
  return (
    <>
      <Route component={LoginPage} path="/" />
      <Route component={LoginPage} path="/login" />
      <Route component={SignUpPage} path="/sign-up" />
    </>
  );
}
