import React, { FormEvent, useState } from "react";
import InputField from "./InputField";
import fields from "../data/field-sign-up.json";
import { createAccount } from "../scripts/authentification";
import { createDocumentWithId } from "../scripts/firestore";
import { useUser } from "../states/UserProvider";
import { useAuth } from "../states/AuthProvider";
import { useHistory } from "react-router-dom";

export default function SignUp() {
  // Global state
    const { setUser } = useUser();
  const { setIsLogged } = useAuth();
  const history = useHistory();
  // Local state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  // Methods
  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    setErrorMessage("");
    const account = await createAccount(email, password);
    //@ts-ignore
    account.isCreated ? onAddItem(account.payload) : onFailure(account.payload);
  }
  async function onAddItem(uid: string) {
    const newUser= {
      name: name,
      email: email,
      city: city
    };
    await createDocumentWithId("users", uid, newUser);
    setUser(newUser);
    setIsLogged(true);
    history.push("/");
  }
  function onFailure(message: string) {
    setErrorMessage(message);
  }
  return (
    <form onSubmit={onSubmit}>
      <InputField state={[name, setName]} options={fields.name} />
      <InputField state={[email, setEmail]} options={fields.email} />
      <InputField state={[city, setCity]} options={fields.city} />
      <InputField state={[password, setPassword]} options={fields.password} />
      <p>{errorMessage}</p>
      <div className="button-container">
        <button type="submit" className="btn button-secondary">
          Sign up
        </button>
      </div>
    </form>
  );
}
