import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = ({ text, selected, iconName, onClick }) => (
  <div
    className={selected ? "type-button selected" : "type-button"}
    onClick={onClick}
  >
    {iconName ? <FontAwesomeIcon className="icon" icon={iconName} /> : null}
    {text}
  </div>
);

export default Button;
