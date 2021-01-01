import React from "react";
import "./Card.css";
const Card = (props) => {
  const {
    idSelector,
    btype,
    totrem,
    itemone,
    itemtwo,
    itemthree,
    itemfour,
  } = props.card;

  return (
    <div className="Card-body" id={idSelector}>
      <img className="Card-logo" src="money-bag (1).png" alt="" />
      <h5 className="Card-h5">Budget Type:</h5>
      <h3 className="Card-h3">{btype}</h3>
      <i className="far fa-plus-square"></i>
      <i className="fas fa-edit"></i>
      <div className="Card-main">
        <h4 className="Card-total-budget">Total Remaining Budget:</h4>
        <h2 className="Card-total-budget-amount">{totrem}</h2>
        <div className="Card-grid">
          <div className="Card-flex">
            <h4>{itemone}</h4>
            <h4>Spent: $0</h4>
          </div>
          <hr />
          <div className="Card-flex">
            <h4>{itemtwo}</h4>
            <h4>Spent: $0</h4>
          </div>
          <hr />
          <div className="Card-flex">
            <h4>{itemthree}</h4>
            <h4>Spent: $0</h4>
          </div>
          <hr />
          <div className="Card-flex">
            <h4>{itemfour}</h4>
            <h4>Spent: $0</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
