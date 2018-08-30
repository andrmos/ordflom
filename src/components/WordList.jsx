import React from "react";
import { connect } from "react-redux";
import Word from "../components/Word";
import { selectWord } from "../reducers/view";

const WordList = ({
  words,
  locationInSentence,
  selectedWordIndex,
  selectWord,
  visible,
  style
}) =>
  visible ? (
    <div className="word-list" style={style}>
      {words.map((word, index) => (
        <Word
          key={word + index}
          word={word}
          selected={index === selectedWordIndex}
          onClick={() => selectWord(word, index, locationInSentence)}
        />
      ))}
    </div>
  ) : null;

const mapDispatchToProps = dispatch => ({
  selectWord: (word, index, locationInSentence) =>
    dispatch(selectWord(word, index, locationInSentence))
});

export default connect(
  null,
  mapDispatchToProps
)(WordList);
