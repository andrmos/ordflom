import React from "react";

import { randomDecimal } from "../../../utils/utils";

const SvadaWord = ({ word, onClick, selected }) => {
  // TODO: Refactor
  const isAssigned = word.length > 0;
  const className = isAssigned
    ? selected
      ? "svada-word svada-word-selected"
      : "svada-word"
    : selected
      ? "svada-word not-assigned-word not-assigned-word-selected"
      : "svada-word not-assigned-word";
  return (
    <div
      className={className}
      style={{ width: isAssigned ? null : randomDecimal(5, 8) + "em" }}
      key={word}
      onClick={() => onClick()}
    >
      {word}
    </div>
  );
};

export default SvadaWord;
