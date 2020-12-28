import React from "react";
import Links from "./Links";
import Logo from "./Logo";
import "./Nav.css";

const Nav = () => {
  return (
    <nav className="Nav-Grid-Container">
      <Logo />
      <div>
        <Links link="How it works" />
        <Links link="Credit Cards and More" />
        <Links link="Investing" />
        <Links link="Loans" />
        <Links link="Resources" />
        <button className="login-btn">Login</button>
        <button className="signup-btn">Sign Up</button>
      </div>
    </nav>
  );
};

export default Nav;
