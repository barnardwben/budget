import React from "react";
import "./Signup.css";
const Signup = (props) => {
  return (
    <>
      <button className="signup-btn" id={props.id}>
        {props.link}
      </button>
    </>
  );
};

export default Signup;
