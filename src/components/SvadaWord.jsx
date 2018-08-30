import React from "react";

const SvadaWord = ({ word, onClick, selected }) => {
  // TODO: Refactor
  const className =
    word.length > 0
      ? selected
        ? "svada-word svada-word-selected"
        : "svada-word"
      : "svada-word not-assigned-word";
  return (
    <div className={className} key={word} onClick={() => onClick()}>
      {word}
    </div>
  );
};

export default SvadaWord;
