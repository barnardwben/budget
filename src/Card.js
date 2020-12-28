import React from "react";
import "./Card.css";
const Card = () => {
  return (
    <div className="Card-body">
      <img className="Card-logo" src="money-bag (1).png" alt="" />
      <h5 className="Card-h5">Budget Type:</h5>
      <h3 className="Card-h3">Monthly</h3>
      <div className="Card-main">
        <h4 className="Card-total-budget">Total Remaining Budget:</h4>
        <h2 className="Card-total-budget-amount">$2,250</h2>
        <div className="Card-grid">
          <div className="Card-flex">
            <h4>Rent:</h4>
            <h4>$850</h4>
          </div>
          <hr />
          <div className="Card-flex">
            <h4>Groceries:</h4>
            <h4>$250</h4>
          </div>
          <hr />
          <div className="Card-flex">
            <h4>Entertainment:</h4>
            <h4>$200</h4>
          </div>
          <hr />
          <div className="Card-flex">
            <h4>Insurance:</h4>
            <h4>$450</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
