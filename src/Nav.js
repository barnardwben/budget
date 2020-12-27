import React from "react";
import Links from "./Links";
import Logo from "./Logo";
import "./Nav.css";
const Nav = () => {
  return (
    <nav className="Nav-Grid-Container">
      <Logo />
      <div>
        <Links link="About" />
        <Links link="Contact" />
        <Links link="Login" />
        <Links link="Sign Up" />
      </div>
    </nav>
  );
};

export default Nav;
