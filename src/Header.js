import React from "react";
import "./Header.css";
import Headermessage from "./Headermessage";
import Card from "./Card";
const Header = () => {
  return (
    <header className="Header-header">
      <Headermessage />
      <Card id="inde-one" />
      <Card id="abso-one" />
      <Card id="abso-two" />
    </header>
  );
};

export default Header;
