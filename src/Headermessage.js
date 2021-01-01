import React from "react";
import "./Headermessage.css";
import Signup from "./Signup";
const Headermessage = () => {
  return (
    <div className="HeaderM-div">
      <section></section>
      <h1>It’s all coming together</h1>
      <p>
        When you’re on top of your money, life is good. We help you effortlessly
        manage your finances in one place.
      </p>
      <Signup link="Join for Free" id="tester" />
    </div>
  );
};

export default Headermessage;
