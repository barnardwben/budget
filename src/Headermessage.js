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
        Having your accounts financially fit helps to keep your life in order.
        We help in building you a dynamically robust budgeting plan.
      </p>
      <Signup link="Join for Free" id="tester" />
    </div>
  );
};

export default Headermessage;
