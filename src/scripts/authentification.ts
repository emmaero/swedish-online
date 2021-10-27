// NPM packages
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";


// Project files
import { authInstance } from "./firebase";

export async function createAccount(email:string, password:string) {
  const account = { isCreated: false, payload: "" };

  try {
    const userCredential = await createUserWithEmailAndPassword(
      authInstance,
      email,
      password
    );
    account.isCreated = true;
    account.payload = userCredential.user.uid;
  } catch (error:any) {
    console.error("authentification.js error", error);
    account.payload = error.code;
  }

  return account;
}

export async function signIn(email:string, password:string) {
  const account = { isLogged: false, payload: "" };

  try {
    const userCredential = await signInWithEmailAndPassword(
      authInstance,
      email,
      password
    );
    account.isLogged = true;
    account.payload = userCredential.user.uid;
  } catch (error:any) {
    console.error("authentification.js error", error);
    account.payload = error.code;
  }

  return account;
}

export async function logout() {
  const account = { isLoggout: false, payload: "" };

  try {
    await signOut(authInstance);
    account.isLoggout = true;
    account.payload = "Logout successfully";
  } catch (error:any) {
    console.error("authentification.js error", error);
    account.payload = error.code;
  }

  return account;
}
export async function reset(email:string) {
  const emailPassword = { isSent: false, payload: "" };
  try {
    await sendPasswordResetEmail(authInstance, email);
    emailPassword.isSent = true;
    emailPassword.payload = "Verification link has been sent"

  } catch (error: any) {
    emailPassword.payload = error.code;
  }
  return emailPassword;
}
