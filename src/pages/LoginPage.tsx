import React from 'react'
import FormLogin from '../components/shared/FormLogin';

export default function LoginPage() {
    return (
      <div className="page-wrapper">
        <div className="page-inner">
          <div className="heading-container">
            <h2>Sign Up</h2>
          </div>
          <FormLogin />
        </div>
      </div>
    );
}
