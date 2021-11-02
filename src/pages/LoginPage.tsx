import React from "react";
import FormLogin from "../components/shared/FormLogin";

// refactor -1
// if the page is only 15 lines of code but one of its children is 50+ then this is not a refactor,
// you just moved the complexity to other place instead to actually make it simpler.
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
