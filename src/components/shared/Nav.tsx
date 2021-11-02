import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="">
      <div className="nav">
        <Link to="/login">
          <button className="button-link">Sign in</button>
        </Link>
        <Link to="/sign-up">
          <button className="btn button-main">Sign up</button>
        </Link>
      </div>
    </nav>
  );
}
