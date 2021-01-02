import React from "react";
import "./Headermessage.css";
import Signup from "./Signup";
import Brandname from "./Brandname";
const Headermessage = () => {
  return (
    <div className="HeaderM-div">
      <Brandname />
      <h1>Finding a safe place for your money</h1>
      <p className="header-para">
        When you’re on top of your money, life is good. We help you effortlessly
        manage your finances in one place.
      </p>
      <Signup link="Join for Free" id="tester" />
    </div>
  );
};

export default Headermessage;
