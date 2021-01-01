import React from "react";
import "./Header.css";
import Headermessage from "./Headermessage";
import Card from "./Card";
import { cards } from "./cardobj";

const Header = () => {
  return (
    <header className="Header-header">
      <Headermessage />
      <section className="card-container">
        {cards.map((card) => {
          return <Card key={card.id} card={card} />;
        })}
      </section>
    </header>
  );
};

export default Header;
