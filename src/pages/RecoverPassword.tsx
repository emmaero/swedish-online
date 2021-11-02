import React, { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import InputField from "../components/shared/InputField";
import fields from "../data/field-login.json";
import { reset } from "../scripts/authentification";

export default function RecoverPassword() {
  // Global state

  const [email, setEmail] = useState("");

  const [message, setMessage] = useState("");
  // Methods
  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    setMessage("");
    const emailPassword = await reset(email);
    
    setMessage(emailPassword.payload);
  }

  return (
    <div className="page-wrapper">
      <div className="page-inner">
        <div className="heading-container">
          <h2>Reset password</h2>
        </div>
        <form onSubmit={onSubmit}>
          <InputField state={[email, setEmail]} options={fields.email} />

          <p>{message}</p>
          <div className="button-container">
            <button type="submit" className="btn button-secondary">
              Reset Password
            </button>
          </div>
          <Link className="button-link blue" to="/login">
            Log me in
          </Link>
        </form>
      </div>
    </div>
  );
}
