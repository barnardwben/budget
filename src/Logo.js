import React from "react";
import "./Logo.css";
import Brandname from "./Brandname";

const Logo = () => {
  return (
    <div>
      <Brandname id="brandNav" />
      <img className="Logo-img" src="\images\mikeslogo.png" alt="Budget Logo" />
    </div>
  );
};

export default Logo;
