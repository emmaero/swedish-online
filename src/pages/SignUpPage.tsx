import React from "react";
import SignUp from "../components/shared/SignUp";

// -1 Same as the comment on LoginPage,
// Same tips apply for everything inside SignUp.jsx
export default function SignUpPage() {
  return (
    <div className="page-wrapper">
      <div className="page-inner">
        <div className="heading-container">
          <h2>Sign Up</h2>
        </div>
        <SignUp />
      </div>
    </div>
  );
}
