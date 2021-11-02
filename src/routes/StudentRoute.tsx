import React from "react";
import { Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import StudentCourseList from "../pages/StudentCourseList";
import StudentPage from "../pages/StudentPage";

export default function StudentRoute() {
  return (
    <>
      <Route component={StudentPage} exact path="/" />
      <Route component={StudentCourseList} path="/course/:courseId" />
      <Route component={LoginPage} path="/login" />
      <Route component={SignUpPage} path="/sign-up" />
    </>
  );
}
