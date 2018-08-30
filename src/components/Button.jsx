import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = ({ text, selected, iconName, onClick }) => (
  <div
    className={selected ? "type-button selected" : "type-button"}
    onClick={onClick}
  >
    <FontAwesomeIcon className="icon" icon={iconName} />
    {text}
  </div>
);

export default Button;
