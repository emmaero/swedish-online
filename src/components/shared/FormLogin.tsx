import { FormEvent, useState } from "react";
import fields from "../../data/field-login.json";
import { signIn } from "../../scripts/authentification";
import { getDocument } from "../../scripts/firestore";
import { useUser } from "../../states/UserProvider";
import { Link, useHistory } from "react-router-dom";
import InputField from "./InputField";
import { useAuth } from "../../states/AuthProvider";

export default function FormLogin() {
  // Global state
  //@ts-ignore
  const { setUser } = useUser();
  //@ts-ignore
  const { setIsLogged } = useAuth();

  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Methods
  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    setErrorMessage("");
    const account = await signIn(email, password);
    account.isLogged ? onSuccess(account.payload) : onFailure(account.payload);
  }
  async function onSuccess(uid: string) {
    const document = await getDocument("users", uid);
    setUser(document);
    setIsLogged(true);
    history.push("/");
  }
  function onFailure(message: string) {
    setErrorMessage(message);
  }
  return (
    <form onSubmit={onSubmit}>
      <InputField state={[email, setEmail]} options={fields.email} />
      <InputField state={[password, setPassword]} options={fields.password} />
      <p>{errorMessage}</p>

      {/* Button container can be refactor in CSS to leave the button alone. */}
      {/* Type submit is not neccesary if is the only button */}
      <div className="button-container">
        <button type="submit" className="btn button-secondary">
          Login
        </button>
      </div>

      {/* Links don't go inside the form, as... they dont interact with the input fields */}
      {/* This could easily be on LoginPage.jsx */}
      <Link className="button-link blue" to="/sign-up">
        Create an account
      </Link>

      {/* This BR can be removed using CSS */}
      <br />

      {/* Same as previous link comments */}
      <Link className="button-link blue" to="/recover-password">
        Recover my password
      </Link>
    </form>
  );
}
