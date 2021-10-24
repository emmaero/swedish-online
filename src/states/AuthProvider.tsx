import React, { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { createContext, ReactNode, useContext, useState } from "react";

import { authInstance } from "../scripts/firebase";
//Interfaces
interface iProps {
  children: ReactNode;
}

const AuthContext = createContext({
  uid: "no user init",
  setIsLogged: (status:boolean) => status,
  isLogged: false,
  setUID:(id:string)=>id
});

export function AuthProvider({ children }:iProps) {
  // Local state

  const [isLogged, setIsLogged] = useState(false);
  const [uid, setUID] = useState("");
  // Methods
  useEffect(() => {
    onAuthStateChanged(authInstance, (user) => {
      if (user) setUID(user.uid);
      else setUID("no user");
    });
  }, []);
  return (
    //@ts-ignore
    <AuthContext.Provider value={{ isLogged, setIsLogged, uid, setUID }}>
      {children}
    </AuthContext.Provider>
  );
}
export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
