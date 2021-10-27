import React from 'react'
import { Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import SignUpPage from '../pages/SignUpPage';
import TeacherPage from '../pages/TeacherPage';

export default function TeacherRoute() {
    return (
      <>
        <Route component={TeacherPage} exact path="/" />
        <Route component={LoginPage} path="/login" />
        <Route component={SignUpPage} path="/sign-up" />
      </>
    );
}
