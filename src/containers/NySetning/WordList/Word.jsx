import React from "react";

const Word = ({ word, selected, onClick }) =>
  selected ? null : (
    <div className="word" onClick={onClick}>
      {word}
    </div>
  );

export default Word;
