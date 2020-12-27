import React from "react";
import "./Links.css";
const Links = (props) => {
  return (
    <button type="button" className="Links-button">
      {props.link}
    </button>
  );
};

export default Links;
