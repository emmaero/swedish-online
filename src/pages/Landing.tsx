import React from "react";
import landingImage from "../assets/images/Swedish Online.png";
import Nav from "../components/shared/Nav";

export default function Landing() {
  return (
    <div className="page-wrapper">
      <div className="page-inner">
        <Nav />

        <div className="page-container">
          <div>
            <img src={landingImage} alt="Sweden online" />
          </div>
          <div>
            <h1>Welcome to swedish online for english speakers</h1>
            <p>
              Improve your swedish in the comfort of your home. All you need is
              a smart phone or a laptop with an internet connection.
            </p>
            <button className="btn button-secondary">Get started</button>
          </div>
        </div>
      </div>
    </div>
  );
}
