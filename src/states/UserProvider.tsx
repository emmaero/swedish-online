import React from "react";
import { createContext, ReactNode, useContext, useState } from "react";
import iUser from "../interfaces/iUser";
// Interfaces
interface iProps {
  children: ReactNode;
}

const UserContext = createContext({
  user: { email: "", password: "", name: "", city: "", isTeacher: false },
  setUser: (newUser: any) => newUser,
});

export function UserProvider({ children }: iProps) {
  // Local state
  const [user, setUser] = useState<iUser>({
    id:"",
    email: "",
    password: "",
    name: "",
    city: "",
    isTeacher: false
  });

    return (
      //@ts-ignore
    <UserContext.Provider value={{ user, setUser}}>
      {children}
    </UserContext.Provider>
  );
}
export function useUser() {
  const context = useContext(UserContext);

  return context;
}
