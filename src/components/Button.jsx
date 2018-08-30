import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = ({ text, selected, iconName, onClick }) => (
  <div
    className={selected ? "type-button selected" : "type-button"}
    onClick={onClick}
  >
    <FontAwesomeIcon className="icon" icon={iconName} />
    {text[0].toUpperCase() + text.slice(1)}
  </div>
);

export default Button;
