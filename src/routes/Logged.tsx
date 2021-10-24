import React from 'react'
import { Route } from 'react-router-dom';

import LoginPage from '../pages/LoginPage';
import SignUpPage from '../pages/SignUpPage';
import StudentPage from '../pages/StudentPage';

export default function Logged() {
    return (
      <>
        
        <Route component={StudentPage} path="/" />
        <Route component={LoginPage} path="/login" />
        <Route component={SignUpPage} path="/sign-up" />
      </>
    );
}
