import React from "react";
import { Link } from "react-router-dom";
import Logout from "./Logout";

export default function NavLogged() {
  return (
    <nav className="">
      <div className="nav">
        <Logout />
      </div>
    </nav>
  );
}
