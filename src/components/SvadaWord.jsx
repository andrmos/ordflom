import React from "react";

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
    <div className={className} key={word} onClick={() => onClick()}>
      {word}
    </div>
  );
};

export default SvadaWord;
